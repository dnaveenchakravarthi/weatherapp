import { Component } from '@angular/core';
import { WeatherservicesService } from '../weatherservices.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'weather app';
  sete = '';

  constructor(private service: WeatherservicesService,private router: Router) {}

  set() {
    this.service.weatherfetch(this.sete);
    this.router.navigate(['/base']); // trigger fetch and broadcast
  }

}
