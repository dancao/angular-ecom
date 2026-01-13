// src/app/services/user.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private http = inject(HttpClient);
  private baseApiUrl = 'http://localhost:3000/api';  // replace with your backend

  getProducts(): Observable<any[]> {
    const apiUrl = this.baseApiUrl + '/products';
    return this.http.get<any[]>(apiUrl);
  }

  getDeliveryOptions(): Observable<any[]> {
    const apiUrl = this.baseApiUrl + '/delivery-options';
    return this.http.get<any[]>(`${apiUrl}`);
  }

  getCartItems(): Observable<any[]> {
    const apiUrl = this.baseApiUrl + '/cart-items?expand=product';
    return this.http.get<any[]>(`${apiUrl}`);
  }

  addProductToCart(productId: string, quantity: number): Observable<any> {
    const apiUrl = this.baseApiUrl + '/cart-items';
    return this.http.post<any>(`${apiUrl}`, {
      productId,
      quantity
    });
  }

  getOrders(): Observable<any[]> {
    const apiUrl = this.baseApiUrl + '/orders?expand=products';
    return this.http.get<any[]>(`${apiUrl}`);
  }

  getOrderById(orderId: string): Observable<any> {
    const apiUrl = this.baseApiUrl + '/orders/' + orderId + '?expand=products';
    return this.http.get<any>(`${apiUrl}`);
  }
}