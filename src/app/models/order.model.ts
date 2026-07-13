import { Customer } from './customer.model';
import { Product } from './product.model';
import { AIRecommendation } from './ai-recommendation.model';

import { OrderPriority } from './order-priority.enum';
import { OrderStatus } from './order-status.enum';
import { OrderType } from './order-type.enum';

export interface Order {
  id: string;

  customer: Customer;

  products: Product[];

  status: OrderStatus;

  priority: OrderPriority;

  type: OrderType;

  totalPrice: number;

  createdAt: Date;

  aiRecommendation?: AIRecommendation;
}
