import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component:HomeComponent },
  { path: 'base', component:BaseComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
