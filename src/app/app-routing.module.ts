import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './footer/contact-us/contact-us.component';
import { Routes, RouterModule} from '@angular/router';
import { MainFooterModule } from './main-footer/main-footer.module';
import { FooterMainComponent } from './main-footer/footer-main/footer-main.component';

const routers:Routes=[
  {
  path:'contactus',
  component: ContactUsComponent
},
  {
  path:'',
  component: FooterMainComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
