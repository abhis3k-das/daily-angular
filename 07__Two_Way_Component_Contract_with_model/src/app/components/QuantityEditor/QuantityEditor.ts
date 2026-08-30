import { Component, model } from '@angular/core';

@Component({
  templateUrl: './QuantityEditor.html',
  selector: 'app-quantity-editor',
})
export class QuantityEditor {
  quantity = model.required<number>();

  increase() {
    this.quantity.update((value) => value + 1);
  }

  decrease() {
    if (this.quantity() <= 1) return;

    this.quantity.update((value) => value - 1);
  }
}
