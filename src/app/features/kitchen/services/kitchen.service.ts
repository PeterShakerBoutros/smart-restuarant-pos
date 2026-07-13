import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  private readonly loads = [20, 35, 55, 70, 85, 95, 60, 40];

  private currentIndex = 0;

  private readonly kitchenLoadSubject = new BehaviorSubject<number>(20);

  readonly kitchenLoad$ = this.kitchenLoadSubject.asObservable();

  constructor() {

    interval(5000).subscribe(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.loads.length;

      this.kitchenLoadSubject.next(
        this.loads[this.currentIndex]
      );

    });

  }

}
