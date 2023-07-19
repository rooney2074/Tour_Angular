import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { ExploreComponent } from './explore/explore.component';
import { ShowComponent } from './show/show.component';
import { FavComponent } from './fav/fav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule, } from 'primeng/card';
import { GMapModule } from 'primeng/gmap';
import { HolidayComponent } from './holiday/holiday.component';
import { HotelComponent } from './hotel/hotel.component';
import { PurposeComponent } from './purpose/purpose.component';
import { BusinessComponent } from './business/business.component';
import { ToastrModule } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ExploreComponent,
    ShowComponent,
    FavComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    HolidayComponent,
    HotelComponent,
    PurposeComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CardModule,
    GMapModule,
    ToastrModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function k(gzipped: any, arg1: number, k: any) {
  throw new Error('Function not implemented.');
}

