import { Component, input } from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();
  displayMode = input<'full' | 'compact'>('full');
}
