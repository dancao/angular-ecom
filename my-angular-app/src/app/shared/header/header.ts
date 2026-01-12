import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyService } from '../../services/app.service';
import { AppUtils } from '../../utils/app-utils';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private dataService = inject(MyService);
  utils = AppUtils;
  cartQuantity = input<number>(0);

  ngOnInit() {    
  }
}
