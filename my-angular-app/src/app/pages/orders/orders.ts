import { Component, inject, input, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';

@Component({
  selector: 'app-orders',
  imports: [
    Header
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  private dataService = inject(MyService);
  cartQuantity = signal(0);
  myCartItems = signal<any[]>([]);

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.dataService.getCartItems().subscribe((data) => {
      this.myCartItems.set(data);
      this.cartQuantity.set(data.reduce((sum, item) => sum + item.quantity, 0));
    });
  }
}
