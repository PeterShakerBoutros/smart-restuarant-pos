import { Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { OrdersPageComponent } from './features/orders/pages/orders-page/orders-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: OrdersPageComponent
      }
    ]
  }
];
