import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OrdersStore } from '../../store/orders.store';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent implements OnInit {

  readonly store = inject(OrdersStore);

  ngOnInit(): void {
    this.store.loadOrders();
  }

}
