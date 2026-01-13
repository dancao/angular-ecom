import { Component, inject, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MyService } from '../../services/app.service';
import dayjs from 'dayjs';

@Component({
  selector: 'app-tracking',
  imports: [
    Header, RouterLink
  ],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking {
  private route = inject(ActivatedRoute);
  private dataService = inject(MyService);
  orderVM = signal<any>({});
  orderId: string = "";

  ngOnInit() {
    // Reactive way – reacts to URL changes (back button, same route nav, etc.)
    this.route.queryParams.subscribe(params => {
      console.log('All query params:', params);

      this.orderId = params['orderId'] ?? '';

      this.dataService.getOrderById(this.orderId).subscribe((data) => {
        let tmp = { ...data }
        tmp.arrivedDate = dayjs(tmp.orderTimeMs).format('dddd, MMMM D');
        this.orderVM.set(tmp);
        console.log(tmp);
      });
    });
  }
}
