import {
  Order,
  OrderPriority,
  OrderStatus,
  OrderType
} from '../models';

import { MOCK_CUSTOMERS } from './customers.mock';
import { MOCK_PRODUCTS } from './products.mock';

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-1001',
    customer: MOCK_CUSTOMERS[0],
    products: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[2]],
    status: OrderStatus.Received,
    priority: OrderPriority.Medium,
    type: OrderType.WalkIn,
    totalPrice: 145,
    createdAt: new Date()
  },
  {
    id: 'ORD-1002',
    customer: MOCK_CUSTOMERS[1],
    products: [MOCK_PRODUCTS[1]],
    status: OrderStatus.Preparing,
    priority: OrderPriority.High,
    type: OrderType.Delivery,
    totalPrice: 180,
    createdAt: new Date()
  }
];
