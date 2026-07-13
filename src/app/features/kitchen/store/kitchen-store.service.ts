import { Injectable, computed, inject, signal } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';

@Injectable({
  providedIn: 'root'
})
export class KitchenStoreService {

  private readonly kitchenService = inject(KitchenService);

  readonly load = signal(20);

  readonly status = computed(() => {

    const value = this.load();

    if (value < 40) return 'Low';

    if (value < 80) return 'Medium';

    return 'High';

  });


  loadKitchen() {

    this.kitchenService.kitchenLoad$
      .subscribe(load => {

        this.load.set(load);

      });

  }

}
