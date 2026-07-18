import { createClient, type SanityClient } from '@sanity/client';

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
