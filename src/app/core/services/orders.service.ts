import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Order } from '../../models';
import { MOCK_ORDERS } from '../../mock-data/orders.mock';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly ordersSubject = new BehaviorSubject<Order[]>(MOCK_ORDERS);

  readonly orders$ = this.ordersSubject.asObservable();

  getOrders() {
    return this.orders$;
  }
}
