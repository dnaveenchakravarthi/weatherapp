import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleCasePipe,UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
 
 

 
 

@NgModule({
  declarations: [
    AppComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe,
    UpperCasePipe,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
