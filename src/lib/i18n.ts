export type Locale = 'ru' | 'en';

export const locales: Locale[] = ['ru', 'en'];
export const defaultLocale: Locale = 'ru';

const dict = {
  ru: {
    'site.title': 'TALISMAN — Пневматические ружья для подводной охоты',
    'site.description':
      'Серийное производство пневматических ружей для подводной охоты с полной взаимозаменяемостью деталей. Доставка по СНГ.',
    'nav.catalog': 'Каталог',
    'nav.about': 'О нас',
    'nav.service': 'Обслуживание',
    'nav.news': 'Новости',
    'nav.contacts': 'Контакты',
    'hero.eyebrow': 'Ручная сборка',
    'hero.title.lead': 'Пневматические ружья для',
    'hero.title.accent': 'подводной охоты',
    'hero.text':
      'Серийное производство с полной взаимозаменяемостью деталей. Каждое ружьё проходит индивидуальную проверку перед отправкой.',
    'hero.cta.catalog': 'Смотреть каталог',
    'hero.cta.video': 'Видео-обзоры',
    'stats.series': 'Серии ружей',
    'stats.models': 'Моделей',
    'stats.countries': 'Стран доставки',
    'stats.years': 'Лет производства',
    'catalog.title': 'Каталог ружей',
    'catalog.all': 'Все модели',
    'catalog.pageTitle': 'Каталог',
    'filter.all': 'Все',
    'filter.parts': 'Запчасти',
    'filter.accessories': 'Аксессуары',
    'product.series': 'Серия',
    'badge.hit': 'Хит',
    'badge.new': 'Новинка',
    'badge.sale': 'Акция',
    'product.addToCart': 'В корзину',
    'product.specs': 'Характеристики',
    'product.features': 'Особенности',
    'product.backToCatalog': 'В каталог',
    'features.title': 'Почему Talisman',
    'features.serial.title': 'Серийное производство',
    'features.serial.text': 'Полная взаимозаменяемость деталей без подгонки',
    'features.warranty.title': 'Гарантия качества',
    'features.warranty.text': 'Прямая поддержка от конструктора',
    'features.disassembly.title': 'Быстрая разборка',
    'features.disassembly.text': 'Полная разборка за 1 минуту',
    'features.delivery.title': 'Доставка по СНГ',
    'features.delivery.text': 'Беларусь, Россия, Латвия и другие',
    'cta.title': 'Не знаете, какую модель выбрать?',
    'cta.text': 'Напишите нам — подберём ружьё под ваши задачи и условия охоты',
    'cta.button': 'Получить консультацию',
    'news.title': 'Новости',
    'news.readMore': 'Читать',
    'news.backToNews': 'Все новости',
    'about.title': 'О нас',
    'service.title': 'Обслуживание',
    'cart.title': 'Корзина',
    'cart.empty': 'Корзина пуста',
    'cart.emptyHint': 'Загляните в каталог — там есть из чего выбрать',
    'cart.item': 'Товар',
    'cart.qty': 'Кол-во',
    'cart.price': 'Цена',
    'cart.total': 'Итого',
    'cart.remove': 'Убрать',
    'cart.orderTitle': 'Оформление заказа',
    'cart.orderHint':
      'Оставьте контакты — мы свяжемся с вами, уточним доставку и способ оплаты.',
    'form.name': 'Имя',
    'form.phone': 'Телефон или мессенджер',
    'form.comment': 'Комментарий к заказу',
    'form.submit': 'Отправить заявку',
    'form.success': 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
    'form.error': 'Не удалось отправить. Напишите нам напрямую: info@talisman.by',
    'footer.rights': 'Все права защищены',
    'lang.ru': 'RU',
    'lang.en': 'EN',
  },
  en: {
    'site.title': 'TALISMAN — Pneumatic spearguns for underwater hunting',
    'site.description':
      'Serial production of pneumatic spearguns with fully interchangeable parts. Shipping across the CIS and Europe.',
    'nav.catalog': 'Catalog',
    'nav.about': 'About',
    'nav.service': 'Service',
    'nav.news': 'News',
    'nav.contacts': 'Contacts',
    'hero.eyebrow': 'Hand assembled',
    'hero.title.lead': 'Pneumatic spearguns for',
    'hero.title.accent': 'underwater hunting',
    'hero.text':
      'Serial production with fully interchangeable parts. Every speargun is individually tested before shipping.',
    'hero.cta.catalog': 'Browse catalog',
    'hero.cta.video': 'Video reviews',
    'stats.series': 'Speargun series',
    'stats.models': 'Models',
    'stats.countries': 'Shipping countries',
    'stats.years': 'Years in production',
    'catalog.title': 'Speargun catalog',
    'catalog.all': 'All models',
    'catalog.pageTitle': 'Catalog',
    'filter.all': 'All',
    'filter.parts': 'Spare parts',
    'filter.accessories': 'Accessories',
    'product.series': 'Series',
    'badge.hit': 'Top pick',
    'badge.new': 'New',
    'badge.sale': 'Sale',
    'product.addToCart': 'Add to cart',
    'product.specs': 'Specifications',
    'product.features': 'Highlights',
    'product.backToCatalog': 'Back to catalog',
    'features.title': 'Why Talisman',
    'features.serial.title': 'Serial production',
    'features.serial.text': 'Fully interchangeable parts, no fitting required',
    'features.warranty.title': 'Quality guarantee',
    'features.warranty.text': 'Direct support from the designer',
    'features.disassembly.title': 'Quick disassembly',
    'features.disassembly.text': 'Full teardown in 1 minute',
    'features.delivery.title': 'CIS shipping',
    'features.delivery.text': 'Belarus, Russia, Latvia and more',
    'cta.title': 'Not sure which model to pick?',
    'cta.text': 'Write to us — we will match a speargun to your conditions',
    'cta.button': 'Get a consultation',
    'news.title': 'News',
    'news.readMore': 'Read',
    'news.backToNews': 'All news',
    'about.title': 'About us',
    'service.title': 'Service',
    'cart.title': 'Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyHint': 'Check out the catalog — plenty to choose from',
    'cart.item': 'Item',
    'cart.qty': 'Qty',
    'cart.price': 'Price',
    'cart.total': 'Total',
    'cart.remove': 'Remove',
    'cart.orderTitle': 'Place an order',
    'cart.orderHint': 'Leave your contacts — we will get back to you about delivery and payment.',
    'form.name': 'Name',
    'form.phone': 'Phone or messenger',
    'form.comment': 'Order comment',
    'form.submit': 'Send request',
    'form.success': 'Request sent! We will contact you shortly.',
    'form.error': 'Sending failed. Contact us directly: info@talisman.by',
    'footer.rights': 'All rights reserved',
    'lang.ru': 'RU',
    'lang.en': 'EN',
  },
} as const;

export type MessageKey = keyof (typeof dict)['ru'];

export function getLocale(astroLocale: string | undefined): Locale {
  return astroLocale === 'en' ? 'en' : 'ru';
}

export function useTranslations(locale: Locale) {
  return (key: MessageKey): string => dict[locale][key] ?? dict.ru[key];
}

/** Locale-aware link: ru has no prefix, en is /en/... */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? `/en${normalized}` : normalized;
}

/** The same path in the other locale (for the language switcher) */
export function switchLocalePath(currentPath: string, target: Locale): string {
  const bare = currentPath.replace(/^\/en(\/|$)/, '/');
  return target === 'en' ? `/en${bare === '/' ? '' : bare}` || '/en' : bare;
}
