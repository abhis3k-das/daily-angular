import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);
  history = signal<number[]>([])

  updateHis(){
    this.history.update(val => [...val,this.count()])
  }
  increment(){
    this.count.update(val => val+1);
    this.updateHis()
  }

  decrement(){
    if(this.count() === 0) return;
    this.count.update(val => val-1)
    this.updateHis()
  }

  reset(){
    this.count.set(0)
    this.history.set([])
  }
}
