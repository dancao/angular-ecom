import { ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';
import { AppUtils } from '../../utils/app-utils';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    Header, FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {  
  private title = inject(Title);
  private dataService = inject(MyService);
  utils = AppUtils;
  // using old way
  private cdr = inject(ChangeDetectorRef);  
  //products: any[] = [];
  // using signal
  products = signal<any[]>([]);
  cartQuantity = signal(0);
  myCartItems = signal<any[]>([]);  

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
      let productsViewModel = [...data];
      productsViewModel.forEach((p) => {
        p.selectedQuantity = 1;
        p.showAdded = false;
      });
      console.log(productsViewModel);
      this.products.update(() => productsViewModel);
    });
  }

  loadCart() {
    this.dataService.getCartItems().subscribe((data) => {
      this.myCartItems.set(data);
      this.cartQuantity.set(data.reduce((sum, item) => sum + item.quantity, 0));
    });
  }

  addProductToCart(product: any) {
    this.dataService.addProductToCart(product.id, Number(product.selectedQuantity)).subscribe((data) => {
      this.loadCart();
      product.selectedQuantity = 1;
      product.showAdded = true;
      setTimeout(() => {
        product.showAdded = false;
        this.cdr.markForCheck();
      }, 3000);
    });
  }
}
