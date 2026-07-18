import { defineField, defineType } from 'sanity';
import { t } from '../locales';

/**
 * Product: a speargun, spare part, or accessory.
 * Fields map 1:1 to the Product type in src/lib/types.ts on the frontend.
 */
export default defineType({
  name: 'product',
  title: t.product.title,
  type: 'document',
  fields: [
    defineField({ name: 'name', title: t.product.name, type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: t.product.slug,
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: t.product.image,
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: t.product.category,
      type: 'string',
      options: {
        list: [
          { title: t.product.categoryGun, value: 'gun' },
          { title: t.product.categoryParts, value: 'parts' },
          { title: t.product.categoryAccessories, value: 'accessories' },
        ],
        layout: 'radio',
      },
      initialValue: 'gun',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'series',
      title: t.product.series,
      type: 'string',
      options: { list: ['Phantom', 'Vortex', 'Trident'] },
      hidden: ({ document }) => document?.category !== 'gun',
    }),
    defineField({
      name: 'badge',
      title: t.product.badge,
      type: 'string',
      options: {
        list: [
          { title: t.product.badgeHit, value: 'hit' },
          { title: t.product.badgeNew, value: 'new' },
          { title: t.product.badgeSale, value: 'sale' },
        ],
      },
    }),
    defineField({ name: 'lengthMm', title: t.product.lengthMm, type: 'number' }),
    defineField({ name: 'diameter', title: t.product.diameter, type: 'string' }),
    defineField({ name: 'mechanism', title: t.product.mechanism, type: 'string', initialValue: 'Пневматика' }),
    defineField({ name: 'priceRub', title: t.product.priceRub, type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'priceByn', title: t.product.priceByn, type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'description', title: t.product.description, type: 'text', rows: 4 }),
    defineField({
      name: 'features',
      title: t.product.features,
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specs',
      title: t.product.specs,
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: t.product.specLabel, type: 'string' },
            { name: 'value', title: t.product.specValue, type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: t.product.featured,
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'series' },
  },
});
