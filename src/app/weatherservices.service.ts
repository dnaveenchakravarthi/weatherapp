import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherservicesService {
  private weatherSubject = new BehaviorSubject<any>(null);
  weatherData$ = this.weatherSubject.asObservable();

  private api_key = '051e944f2380b87ecf1e12e51e5cba92';

  constructor(private http: HttpClient) {}

  weatherfetch(location: string) {
    const url = `http://api.weatherstack.com/current?access_key=${this.api_key}&query=${location}`;
    this.http.get(url).subscribe(
      data => this.weatherSubject.next(data),
      error => {
        console.error('Error fetching weather:', error);
        this.weatherSubject.next({ error: 'Failed to fetch data' });
      }
    );
  }
}
