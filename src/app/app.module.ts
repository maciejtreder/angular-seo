import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 declarations: [
   AppComponent,
   FirstComponent,
   SecondComponent,
   MenuComponent
 ],
 imports:[
 CommonModule,
NgtUniversalModule,
 
   
   AppRoutingModule,
   HttpClientModule
 ],
 providers: [],
})
export class AppModule { }



