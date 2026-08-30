import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuantityEditor } from './components/QuantityEditor/QuantityEditor';

@Component({
  imports: [RouterOutlet , QuantityEditor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  quantity = 1;
}
