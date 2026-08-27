import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-status-card',
  styleUrl: './profile-status-card.css',
  templateUrl: './profile-status-card.html',
})
export class ProfileStatusCard {
    name = 'Abhisek Das';
    role = 'Full Stack Developer';
    isActive = true;
    isProcessing = false;
    toggleStatus() {
      this.isActive = !this.isActive;
    }
}
