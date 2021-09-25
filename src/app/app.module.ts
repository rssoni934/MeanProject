import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MainFooterComponent } from './main-footer/main-footer.component';
//import { FooterMainComponent } from './mainFooter/footer-main/footer-main.component';
import { MainFooterModule } from './main-footer/main-footer.module'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ForegtpasswordComponent } from './header/foregtpassword/foregtpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    ForegtpasswordComponent
    
  ],
  imports: [
    BrowserModule,
    FooterModule,
    MainFooterModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
