import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  theme = signal<'dark' | 'light'>('dark');
  themeEffect = effect(() => {
    const currentTheme = this.theme();
    localStorage.setItem('theme' , JSON.stringify(currentTheme));
    console.log("Theme Changed",currentTheme);
  })
  toggleTheme = () => {
    this.theme.update(prev => prev === 'dark' ? 'light' : 'dark')
  }

}
