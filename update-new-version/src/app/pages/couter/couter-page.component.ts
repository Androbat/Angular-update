import { Component, signal } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `<h1>{{ counter }}</h1>
        <button (click)="increase(1)">+1</button>
    `
})

export class CounterPageComponent {
    public counter = 0;

    increase(value: number){
        return this.counter += value
    }
}