import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

import { Order, OrderStatus } from '../../models';
import { MOCK_ORDERS } from '../../mock-data/orders.mock';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly ordersSubject = new BehaviorSubject<Order[]>([...MOCK_ORDERS]);

  readonly orders$ = this.ordersSubject.asObservable();

  constructor() {
    this.startLiveUpdates();
  }

  getOrders() {
    return this.orders$;
  }

  private startLiveUpdates(): void {

    interval(5000).subscribe(() => {

      const updatedOrders = this.ordersSubject.value.map(order => ({
        ...order,
        status: this.getNextStatus(order.status)
      }));

      this.ordersSubject.next(updatedOrders);

    });

  }

  private getNextStatus(status: OrderStatus): OrderStatus {

    switch (status) {

      case OrderStatus.Received:
        return OrderStatus.Preparing;

      case OrderStatus.Preparing:
        return OrderStatus.Ready;

      case OrderStatus.Ready:
        return OrderStatus.Delivered;

      case OrderStatus.Delivered:
        return OrderStatus.Completed;

      default:
        return OrderStatus.Completed;

    }

  }

}
