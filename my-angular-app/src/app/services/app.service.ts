// src/app/services/user.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

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
}