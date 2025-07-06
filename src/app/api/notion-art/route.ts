import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';
import type { PageObjectResponse, PartialPageObjectResponse, PartialDatabaseObjectResponse, DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Type for any page response from Notion
type NotionPageResponse = PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_ART_DATABASE_ID as string,
    });

    const artworks = response.results.map((page: NotionPageResponse) => {
      // Type guard to ensure we have the required properties
      if (!('id' in page) || !('properties' in page)) {
        return null;
      }
      
      const { properties } = page;
      
      // Try multiple possible image property names
      let imageUrl = null;
      const possibleImageProps = ['Image', 'Images', 'Photo', 'Picture', 'Artwork', 'File'];
      
      for (const propName of possibleImageProps) {
        if (properties[propName]) {
          const prop = properties[propName];
          if ('files' in prop && prop.files && Array.isArray(prop.files) && prop.files.length > 0) {
            const file = prop.files[0];
            if (file && typeof file === 'object' && 'file' in file && file.file) {
              imageUrl = file.file.url;
            } else if (file && typeof file === 'object' && 'external' in file && file.external) {
              imageUrl = file.external.url;
            }
            break;
          }
        }
      }
      
      // Also check if there's a cover image on the page itself
      if (!imageUrl && 'cover' in page && page.cover) {
        if ('file' in page.cover && page.cover.file) {
          imageUrl = page.cover.file.url;
        } else if ('external' in page.cover && page.cover.external) {
          imageUrl = page.cover.external.url;
        }
      }
      
      return {
        id: page.id,
        title: getPropertyValue(properties, 'Artwork Title', 'title') || 'Untitled',
        medium: getPropertyValue(properties, 'Medium', 'select') || 'Mixed Media',
        size: getPropertyValue(properties, 'Size', 'rich_text') || '',
        description: getPropertyValue(properties, 'Description', 'rich_text') || '',
        category: getPropertyValue(properties, 'Category', 'select') || 'Art',
        // Use our proxy endpoint for images to handle CORS and expiration
        image: imageUrl ? `/api/notion-image?url=${encodeURIComponent(imageUrl)}` : null
      };
    }).filter(Boolean); // Remove any null entries

    return NextResponse.json({ artworks });
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return NextResponse.json({ error: 'Failed to fetch artworks' }, { status: 500 });
  }
}

// Helper function to safely extract property values
function getPropertyValue(properties: Record<string, unknown>, propName: string, propType: string): string | null {
  const prop = properties[propName];
  if (!prop) return null;
  
  switch (propType) {
    case 'title':
      return (prop as { title?: Array<{ plain_text: string }> })?.title?.[0]?.plain_text || null;
    case 'select':
      return (prop as { select?: { name: string } })?.select?.name || null;
    case 'rich_text':
      return (prop as { rich_text?: Array<{ plain_text: string }> })?.rich_text?.[0]?.plain_text || null;
    default:
      return null;
  }
} 