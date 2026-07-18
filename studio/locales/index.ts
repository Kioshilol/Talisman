import en from './en';
import ru from './ru';

export type Strings = typeof en;

const locales: Record<string, Strings> = { en, ru };

const locale =
  (import.meta as { env?: Record<string, string | undefined> }).env?.SANITY_STUDIO_LOCALE ?? 'ru';

/**
 * Studio UI strings. Locale is picked at build time via SANITY_STUDIO_LOCALE
 * (a Vite-exposed env var in Sanity Studio); defaults to Russian for the client.
 */
export const t: Strings = locales[locale] ?? ru;
