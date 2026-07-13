import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Order } from '../../../../models';
import { OrderStatusBadgeComponent } from '../order-status-badge/order-status-badge.component';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    CommonModule,
    OrderStatusBadgeComponent
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {

  @Input({ required: true })
  order!: Order;

}
