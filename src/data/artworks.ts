export interface Artwork {
  id: number;
  src: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  category: 'painting' | 'drawing' | 'mixed-media';
}

export const paintings: Artwork[] = [
  { id: 1, src: '/artworks/IMG_4141.jpg', title: 'Free, Free, Free', medium: 'Oil on Canvas', dimensions: '18" x 24"', year: '2023', category: 'painting' },
  { id: 5, src: '/artworks/IMG_4137.jpg', title: 'Apples', medium: 'Watercolor on Paper', dimensions: '12" x 14"', year: '2021', category: 'painting' },
  { id: 10, src: '/artworks/IMG_5022.jpg', title: 'Through a Different Lens', medium: 'Oil on Canvas', dimensions: '18" x 24"', year: '2021', category: 'painting' },
  { id: 12, src: '/artworks/IMG_5027.jpg', title: 'Chasing Creativity', medium: 'Acrylic on Canvas Panel', dimensions: '14" x 18"', year: '2020', category: 'painting' },
  { id: 6, src: '/artworks/IMG_4140.JPG', title: 'Mask', medium: 'Oil on Canvas', dimensions: '11" x 14"', year: '2022', category: 'painting' },
  { id: 11, src: '/artworks/IMG_5024.jpg', title: 'Modernization', medium: 'Acrylic on Canvas', dimensions: '14" x 14"', year: '2021', category: 'painting' },
  { id: 7, src: '/artworks/IMG_2608.JPG', title: 'Victory', medium: 'Acrylic on Paper', dimensions: '18" x 24"', year: '2020', category: 'painting' },
];

export const drawings: Artwork[] = [
  { id: 3, src: '/artworks/IMG_2607.JPG', title: 'A Hardworking Mom', medium: 'Pen and Charcoal on Paper', dimensions: '13" x 18"', year: '2022', category: 'drawing' },
  { id: 4, src: '/artworks/IMG_4139.JPG', title: 'Normal Lunch', medium: 'Colored Pencil on Paper', dimensions: '12" x 12"', year: '2021', category: 'drawing' },
  { id: 8, src: '/artworks/IMG_4138.jpg', title: 'Danger', medium: 'Pencil on Paper', dimensions: '14" x 16"', year: '2021', category: 'drawing' },
];

export const mixedMedia: Artwork[] = [
  { id: 14, src: '/artworks/IMG_5179.JPG', title: 'Social Media', medium: 'Mixed Media Sculpture', dimensions: '14" x 10" x 20"', year: '2020', category: 'mixed-media' },
  { id: 9, src: '/artworks/IMG_2431.JPG', title: 'Flight and Freedom', medium: 'Colored Pencil and Watercolor on Paper', dimensions: '12" x 14"', year: '2020', category: 'mixed-media' },
  { id: 13, src: '/artworks/IMG_5040.jpg', title: 'Leaving Home', medium: 'Photography and White Gel Pen', dimensions: '11" x 14"', year: '2021', category: 'mixed-media' },
  { id: 2, src: '/artworks/IMG_2606.JPG', title: 'Frames', medium: 'Pen, Acrylic, and Watercolor on Paper', dimensions: '18" x 24"', year: '2022', category: 'mixed-media' },
];
