import { Component, input } from '@angular/core';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-orders',
  imports: [
    Header
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
}
