import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersStore } from '../../store/orders.store';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent {

  readonly store = inject(OrdersStore);

  constructor() {
    this.store.loadOrders();
  }

}
