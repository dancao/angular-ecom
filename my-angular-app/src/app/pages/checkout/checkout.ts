import { Component } from '@angular/core';
import { CheckoutHeader } from '../../shared/checkout-header/checkout-header'

@Component({
  selector: 'app-checkout',
  imports: [
    CheckoutHeader
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

}
