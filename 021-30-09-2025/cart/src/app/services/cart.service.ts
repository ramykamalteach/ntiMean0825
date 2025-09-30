import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly STORAGE_KEY = 'cart_items';

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._items()));
    });
  }

  private loadCart(): CartItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private _items = signal<CartItem[]>(this.loadCart());
  items = this._items.asReadonly();

  addItem(product: CartItem) {
    const items = [...this._items()];
    const index = items.findIndex((i) => i.id === product.id);

    if (index > -1) {
      items[index] = {
        ...items[index],
        quantity: items[index].quantity + product.quantity,
      };
    } else {
      items.push(product);
    }
    this._items.set(items);
  }

  removeItem(productId: string) {
    this._items.set(this._items().filter((item) => item.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    const items = this._items().map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    this._items.set(items);
  }

  clearCart() {
    this._items.set([]);
  }


  totalQuantity = computed(() =>
    this._items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this._items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );


}
