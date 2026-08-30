import { Component, input, output } from "@angular/core";
import { User } from "./User.model";

@Component({
  imports:[],
  styleUrl:"./UserCard.css",
  selector:"app-user-card",
  templateUrl:"./UserCard.html",
})
export class UserCard {
  user = input.required<User>();
  selected = output<number>();
  delete = output<number>();

  selectUser(){
    this.selected.emit(this.user().id);
  }

  deleteUser(){
    this.delete.emit(this.user().id);
  }
}
