import { defineField, defineType } from 'sanity';
import { t } from '../locales';

/** News post. Fields map to the Post type in src/lib/types.ts on the frontend. */
export default defineType({
  name: 'post',
  title: t.post.title,
  type: 'document',
  fields: [
    defineField({ name: 'title', title: t.post.titleField, type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: t.post.slug,
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'date', title: t.post.date, type: 'date', validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: t.post.excerpt, type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: t.post.body,
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
});
