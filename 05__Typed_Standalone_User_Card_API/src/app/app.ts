import { UserCard } from './components/user-card/user-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user-card/user.model';

@Component({
  imports: [RouterOutlet,UserCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  adminUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  };

  supportUser: User = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Support',
  };
}
