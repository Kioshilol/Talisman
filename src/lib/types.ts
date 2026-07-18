export type ProductCategory = 'gun' | 'parts' | 'accessories';
export type ProductSeries = 'Phantom' | 'Vortex' | 'Trident' | 'Benger' | null;
export type ProductBadge = 'hit' | 'new' | 'sale' | null;

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  series: ProductSeries;
  badge: ProductBadge;
  /** Sanity image reference; absent in mock data, null when no photo is uploaded */
  image?: { asset?: { _ref: string } } | null;
  /** Gun length, mm (null for parts/accessories) */
  lengthMm: number | null;
  /** Diameter designation, e.g. "170" */
  diameter: string | null;
  mechanism: string | null;
  priceRub: number;
  priceByn: number;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  featured: boolean;
  /** Shown in the homepage hero card; absent in mock data */
  hero?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  body: string[]; // paragraphs
}
