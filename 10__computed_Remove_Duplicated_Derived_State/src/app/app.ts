import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

interface CartItem {
  id: number,
  name : string,
  price : number,
  quantity : number,
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cart = signal<CartItem[]>([
    {
      id: 1,
      name : 'Laptop',
      price : 50000,
      quantity : 1,
    },
    {
      id : 2,
      name : 'Mouse',
      price : 1000,
      quantity : 2
    }
  ])

  // subTotal = signal(52000) // This is wrong .You must compute the total
  subTotal = computed(()=> this.cart().reduce((total , item) => total + (item.price * item.quantity),0))
  itemCount = computed(()=>this.cart().reduce((total,item)=> total + item.quantity , 0))
  isDiscountEligible = computed(()=>this.subTotal() >= 50000)
  increaseQuantity(id : number){
    this.cart.update(items => items.map(el => el.id === id ? {...el , quantity : el.quantity + 1} : el))
  }

  removeItem(id: number) {
    this.cart.update(items =>
      items.filter(item => item.id !== id)
    );
  }
}
