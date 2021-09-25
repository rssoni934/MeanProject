import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    FooterMainComponent
  ]
})
export class MainFooterModule { }
