import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
import { AppComponent } from './app.component';
import { TitleCasePipe,UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherservicesService } from './weatherservices.service';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'

 

 
 

 
 

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HomeComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe,
    UpperCasePipe,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    RouterModule
    
  
  
    
  ],
  providers: [WeatherservicesService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
