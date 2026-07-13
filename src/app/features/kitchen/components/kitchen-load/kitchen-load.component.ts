import { Component, inject, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { KitchenStoreService } from '../../store/kitchen-store.service';

@Component({
  selector: 'app-kitchen-load',
  standalone: true,
  imports: [
    ProgressBarModule
  ],
  templateUrl: './kitchen-load.component.html',
  styleUrl: './kitchen-load.component.css'
})
export class KitchenLoadComponent implements OnInit {

  private kitchenStore = inject(KitchenStoreService);

  load = this.kitchenStore.load;
  status = this.kitchenStore.status;


  ngOnInit(): void {
    this.kitchenStore.loadKitchen();
  }

}
