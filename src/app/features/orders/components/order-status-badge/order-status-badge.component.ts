import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

import { OrderStatus } from '../../../../models';

@Component({
  selector: 'app-order-status-badge',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './order-status-badge.component.html',
  styleUrl: './order-status-badge.component.css'
})
export class OrderStatusBadgeComponent {

  @Input({ required: true })
  status!: OrderStatus;

  get severity(): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {

    switch (this.status) {

      case OrderStatus.Received:
        return 'warn';

      case OrderStatus.Preparing:
        return 'info';

      case OrderStatus.Ready:
        return 'success';

      case OrderStatus.Delivered:
        return 'secondary';

      case OrderStatus.Completed:
        return 'success';

      default:
        return 'secondary';
    }
  }
}
