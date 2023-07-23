import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { GoogleMapsModule } from '@angular/google-maps';
import { AngularMaterialModule } from './angular-material.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ServiceComponent } from './components/service/service.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { MouseOverProductDirective } from './directives/mouse-over-product.directive';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { CountUpDirective } from './directives/count-up.directive';
import { NavDropdownComponent } from './components/nav-dropdown/nav-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    BookingComponent,
    ContactComponent,
    MenuComponent,
    TeamComponent,
    TestimonialComponent,
    ServiceComponent,
    PlaceorderComponent,
    MouseOverProductDirective,
    ModalComponent,
    SidebarComponent,
    PaymentComponent,
    SuccessPaymentComponent,
    GoogleMapComponent,
    CountUpDirective,
    NavDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgwWowModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    GoogleMapsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
