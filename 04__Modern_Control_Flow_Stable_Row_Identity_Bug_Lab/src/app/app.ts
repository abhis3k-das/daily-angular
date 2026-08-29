import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Ticket {
  id : number,
  title : string,
}
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  loading : boolean = false;
  tickets: Ticket[] = [
    {
      id : 101,
      title : "Login Issue",
    },
    {
      id : 102,
      title : "Payment Failed",
    },
    {
      id : 103,
      title : "Profile not Updating"
    }
  ]

  deleteTicket = (id: number) => this.tickets = this.tickets.filter(el => el.id !== id);
  moveUp = (id : number) => {
    const targetIndex = this.tickets.findIndex(el => el.id === id);
    if(targetIndex === 0) return;

    const prevEle = this.tickets[targetIndex - 1]
    const currEle = this.tickets[targetIndex]

    const updatedList : Ticket[]= []
    this.tickets.forEach((el,index) => {
      if(index === targetIndex - 1){
        updatedList.push(currEle);
        return
      }
      if(index === targetIndex){
        updatedList.push(prevEle)
        return
      }
      updatedList.push(el);
    })
    this.tickets = [...updatedList]
  }
  moveDown = (id : number) => {
    const targetIndex = this.tickets.findIndex(el => el.id === id);
    if(targetIndex === (this.tickets.length - 1)) return;

    const nextEle = this.tickets[targetIndex + 1]
    const currEle = this.tickets[targetIndex]

    const updatedList : Ticket[]= []
    this.tickets.forEach((el,index) => {
      if(index === targetIndex + 1){
        updatedList.push(currEle);
        return
      }
      if(index === targetIndex){
        updatedList.push(nextEle)
        return
      }
      updatedList.push(el);
    })

    this.tickets = [...updatedList]
  }
}
