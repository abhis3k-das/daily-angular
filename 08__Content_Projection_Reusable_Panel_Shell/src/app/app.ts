import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Panel } from './components/panel/panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Panel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
