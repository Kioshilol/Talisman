/**
 * Client-side cart shared by the global Base layout script and the /cart page.
 * Imported from <script> blocks only: relies on localStorage and the DOM.
 */

export type CartItem = {
  slug: string;
  name: string;
  priceRub: number;
  priceByn: number;
  qty: number;
};

const STORAGE_KEY = 'talisman_cart_v1';

export function readCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  updateBadge();
  document.dispatchEvent(new CustomEvent('cart:changed'));
}

export function updateBadge() {
  const count = readCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll<HTMLElement>('[data-cart-badge]').forEach((el) => {
    el.textContent = String(count);
  });
}
