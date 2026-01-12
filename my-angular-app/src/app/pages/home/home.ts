import { ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';
import { AppUtils } from '../../utils/app-utils';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {  
  private title = inject(Title);
  private dataService = inject(MyService);
  utils = AppUtils;
  // using old way
  //private cdr = inject(ChangeDetectorRef);  
  //products: any[] = [];
  // using signal
  products = signal<any[]>([]);
  cartQuantity = signal(0);

  ngOnInit() {
    // this.title.setTitle(`${product.name} - My Awesome App`);
    this.title.setTitle(`Dashboard - My Awesome App`);
    this.loadProducts();
    this.loadCart();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      // this.products = data;
      // this.cdr.markForCheck();
      this.products.update(() => data);
    });
  }

  loadCart() {
    this.dataService.getCartItems().subscribe((data) => {
      this.cartQuantity.set(data.reduce((sum, item) => sum + item.quantity, 0));
    });
  }
}
