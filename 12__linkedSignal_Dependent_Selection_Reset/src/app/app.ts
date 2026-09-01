import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  country = signal<'India' | 'USA'>('India');
  cities = computed(()=> this.country() === 'India' ? ['India-1' , 'India-2'] : ['USA-1' , 'USA-2'])


  selectedCity = signal<string | null>(null)
  cityResetEffect = effect(()=>{
    const currentCities = this.cities();
    const selectedCity = this.selectedCity();

    if(selectedCity && !currentCities.includes(selectedCity)){
      this.selectCity(null)
    }
  })

  toggleCountry = () => {
    this.country.update(prev => prev === 'India' ? 'USA' : 'India')
  }
  selectCity = (city : string | null)=>{
    this.selectedCity.set(city)
    this.linkedSelectedCity.set(city)
    this.advancedLinkedSelectedCity.set(city)
  }

  linkedSelectedCity = linkedSignal<string | null>(()=>this.cities()[0])
  advancedLinkedSelectedCity = linkedSignal<string[], string | null>({
    source: this.cities,

    computation: (newCities, previous) => {
      const previousCity = previous?.value;

      if (previousCity && newCities.includes(previousCity)) {
        return previousCity;
      }

      return newCities[0];
    },
  });
}
