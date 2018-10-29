import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
 imports: [
   RouterModule.forRoot([
     { path: '', redirectTo: '/firstComponent', pathMatch: 'full' },
     { path: 'firstComponent', component: FirstComponent },
     { path: 'secondComponent', component: SecondComponent }
   ])
 ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }

