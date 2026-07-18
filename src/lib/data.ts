import type { Post, Product } from './types';
import { sanityClient, sanityEnabled } from './sanity';
import productsMock from '../data/products.json';
import postsMock from '../data/posts.json';

/**
 * Single content access point.
 * Without Sanity env vars (no PUBLIC_SANITY_PROJECT_ID) data comes from
 * src/data/*.json; with them the site builds from live CMS data.
 * Pages need no changes either way.
 */

const PRODUCTS_QUERY = `*[_type == "product"] | order(featured desc, name asc) {
  "slug": slug.current,
  name,
  category,
  series,
  badge,
  image,
  lengthMm,
  diameter,
  mechanism,
  priceRub,
  priceByn,
  "description": coalesce(description, ""),
  "features": coalesce(features, []),
  "specs": coalesce(specs, []),
  "featured": coalesce(featured, false),
  "hero": coalesce(hero, false)
}`;

const POSTS_QUERY = `*[_type == "post"] | order(date desc) {
  "slug": slug.current,
  title,
  date,
  "excerpt": coalesce(excerpt, ""),
  "body": coalesce(body, [])
}`;

export async function getProducts(): Promise<Product[]> {
  if (sanityEnabled && sanityClient) {
    return sanityClient.fetch<Product[]>(PRODUCTS_QUERY);
  }
  return productsMock as Product[];
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) => p.featured).slice(0, limit);
}

/** Product for the homepage hero card: the hero-flagged one, else the first featured */
export async function getHeroProduct(): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.hero) ?? products.find((p) => p.featured);
}

export async function getPosts(): Promise<Post[]> {
  if (sanityEnabled && sanityClient) {
    return sanityClient.fetch<Post[]>(POSTS_QUERY);
  }
  return (postsMock as Post[]).slice().sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}
