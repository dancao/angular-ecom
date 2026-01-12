import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { MyService } from '../../services/app.service';
import { AppUtils } from '../../utils/app-utils';

@Component({
  selector: 'app-home',
  imports: [
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dataService = inject(MyService);
  utils = AppUtils;
  // using old way
  //private cdr = inject(ChangeDetectorRef);  
  //products: any[] = [];
  // using signal
  products = signal<any[]>([]);

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      // this.products = data;
      // this.cdr.markForCheck();
      this.products.update(() => data);
    });
  }
}
