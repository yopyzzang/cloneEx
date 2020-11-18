import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product: any): void {
    // @ts-ignore
    this.items.push(product);
  }

  getItems(): any{
    return this.items;
  }

  clearCart(): any{
    this.items = [];
    return this.items;
  }

  getShippingPrices(): any{
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
