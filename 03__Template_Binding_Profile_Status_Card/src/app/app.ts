import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProfileStatusCard } from './pages/profile-status-card/profile-status-card';

@Component({
  imports: [RouterOutlet, ProfileStatusCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('03__Template_Binding_Profile_Status_Card');
}
