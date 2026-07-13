import { Injectable, computed, inject, signal } from '@angular/core';
import { Order } from '../../../models';
import { OrdersService } from '../../../core/services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersStore {

  private readonly ordersService = inject(OrdersService);

  readonly orders = signal<Order[]>([]);

  readonly totalOrders = computed(() => this.orders().length);

  loadOrders(): void {
    this.ordersService.getOrders().subscribe({
      next: orders => this.orders.set(orders)
    });
  }

}
