export interface Artwork {
  id: number;
  src: string;
  title: string;
  description?: string;
}

export const artworks: Artwork[] = [
  { id: 1, src: '/artworks/IMG_4141.jpg', title: 'Free, Free, Free', description: '18" x 24" • Oil on canvas' },
  { id: 2, src: '/artworks/IMG_2606.JPG', title: 'Frames', description: '18" x 24" • Pen, acrylic, and watercolor on paper' },
  { id: 3, src: '/artworks/IMG_2607.JPG', title: 'A Hardworking Mom', description: '13" x 18" • Pen and charcoal on paper' },
  { id: 4, src: '/artworks/IMG_4139.JPG', title: 'Normal Lunch', description: '12" x 12" • Colored pencil on paper' },
  { id: 5, src: '/artworks/IMG_4137.jpg', title: 'Apples', description: '12" x 14" • Watercolor on paper' },
  { id: 6, src: '/artworks/IMG_4140.JPG', title: 'Mask', description: '11" x 14" • Oil on canvas' },
  { id: 7, src: '/artworks/IMG_2608.JPG', title: 'Victory', description: '18" x 24" • Acrylic on paper' },
  { id: 8, src: '/artworks/IMG_4138.jpg', title: 'Danger', description: '14" x 16" • Pencil on paper' },
  { id: 9, src: '/artworks/IMG_2431.JPG', title: 'Flight and Freedom', description: '12" x 14" • Colored pencil and watercolor on paper' },
  { id: 10, src: '/artworks/IMG_5022.jpg', title: 'Through a Different Lens', description: '18" x 24" • Oil on canvas' },
  { id: 11, src: '/artworks/IMG_5024.jpg', title: 'Modernization', description: '14" x 14" • Acrylic on canvas' },
  { id: 12, src: '/artworks/IMG_5027.jpg', title: 'Chasing Creativity', description: '14" x 18" • Acrylic on canvas panel' },
  { id: 13, src: '/artworks/IMG_5040.jpg', title: 'Leaving Home', description: '11" x 14" • Photography and white gel pen' },
  { id: 14, src: '/artworks/IMG_5179.JPG', title: 'Social Media', description: '14" x 10" x 20" • Mixed media sculpture' },
];
