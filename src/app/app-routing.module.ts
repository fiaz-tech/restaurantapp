import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'order', component: PlaceorderComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'success', component: SuccessPaymentComponent},
  { path: 'maap', component: GoogleMapComponent},


  { path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
