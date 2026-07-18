import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.PUBLIC_SANITY_DATASET as string | undefined) ?? 'production';

/** true when Sanity env vars are set, otherwise the site builds from mock data */
export const sanityEnabled = Boolean(projectId);

export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2026-07-01',
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** CDN URL for a Sanity image, or null when Sanity is off or the image is not set */
export function sanityImageUrl(
  source: SanityImageSource | null | undefined,
  width: number,
): string | null {
  if (!builder || !source) return null;
  return builder.image(source).width(width).auto('format').url();
}
