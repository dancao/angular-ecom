import { Component, inject, input, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';
import { Router } from '@angular/router';
import { AppUtils } from '../../utils/app-utils';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [
    Header, DatePipe
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  private dataService = inject(MyService);
  utils = AppUtils;
  cartQuantity = signal(0);
  myCartItems = signal<any[]>([]);
  private router = inject(Router);   // modern inject() style
  orders = signal<any[]>([]);

  ngOnInit() {
    this.loadCart();
    this.loadOrders();
  }

  loadCart() {
    this.dataService.getCartItems().subscribe((data) => {
      this.myCartItems.set(data);
      this.cartQuantity.set(data.reduce((sum, item) => sum + item.quantity, 0));
    });
  }

  loadOrders() {
    this.dataService.getOrders().subscribe((data) => {
      this.orders.set(data);
      console.log(data);
    });
  }

  navigateToTracking(orderId: string){
     this.router.navigate(['/tracking'], {
      queryParams: { orderId: orderId }
     });
  }

  addProductToCart(product: any) {
    this.dataService.addProductToCart(product.id, 1).subscribe((data) => {
      this.loadCart();
    });
  }
}
