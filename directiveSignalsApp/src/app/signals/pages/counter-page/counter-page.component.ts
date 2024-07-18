import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-counter-page',
    templateUrl: './counter-page.component.html',
})
export class CounterPageComponent { 

    public counter = signal(10);
    public squareCounter = computed(() => this.counter() * this.counter() );

    increaseBy(value: number) {
        this.counter.update(counter => counter + value);
    }
}
