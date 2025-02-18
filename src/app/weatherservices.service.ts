import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherservicesService {

   
  private apikey='e5152e335e134edca9982150250402';
  private baseurl='http://api.weatherapi.com/v1/current.json';
  constructor() { }
  weatherfetch(sete:string): Promise<any>{
   return  fetch(`${this.baseurl}?key=${this.apikey}&q=${sete}`)
    .then(response=>{
     return  response.json()
    })
    .then (data=>data
       
      )
       

  }
}
