import { Component } from '@angular/core';
import { WeatherservicesService } from './weatherservices.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather app';
  sete:string='';
  name:string='';
  temp:string=''
  wind:string='';
  art:any=null;
  image:string=''
 
 

   
 constructor(private service:WeatherservicesService){}
   
 

  set(){
    
    this.service.weatherfetch(this.sete)
    .then(data=>{
      this.art = data;
      this.name=this.sete
      this.temp="The temperature "+data.current.temp_c;
      this.wind="the wind speed is"+data.current.wind_kph;
      this.image=data.current.condition.icon

    })
     
       
      
       
       
     

  }

}
