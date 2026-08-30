import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './components/UserCard/UserCard';
import { User } from './components/UserCard/User.model';

@Component({
  imports: [RouterOutlet,UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users : User[] = [
    {
      id : 100,
      name : "Abhisek Das",
      gmail : "abhi@gmail.com"
    },
    {
      id : 101,
      name : "Joe",
      gmail : "joe@gmail.com"
    },
]

  selectedUserId : number | null = null;

  handleSelect(id : number){
    this.selectedUserId = id;
  }

  handleDelete(id :number){
    console.log(id)
    this.users = this.users.filter(user => user.id !== id);
    if(this.selectedUserId === id){
      this.selectedUserId = null
    }
  }

}
