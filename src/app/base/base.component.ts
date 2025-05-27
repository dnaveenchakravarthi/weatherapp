// base.component.ts
import { Component, OnInit } from '@angular/core';
import { WeatherservicesService } from '../weatherservices.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  temp = '';
  wind = '';
  image = '';
  wind_degree = '';
  name = '';
  

  constructor(private service: WeatherservicesService) {}

  ngOnInit(): void {
    this.service.weatherData$.subscribe(data => {
      console.log( data);
      if (data && !data.error) {
        
        this.name = data.location.name;
        this.temp = ` ${data.current.temperature} °C`;
        
        this.wind = ` wind speed : ${data.current.wind_speed}`;
        this.image = data.current.weather_icons[0];
        this.wind_degree = ` wind Degree  ${data.current.wind_degree}`;
      } else if (data?.error) {
        this.temp = data.error;
      }
    });
  }
}
