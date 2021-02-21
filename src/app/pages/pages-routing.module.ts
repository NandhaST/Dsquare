import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CancelComponent } from './cancel/cancel.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { TariffComponent } from './tariff/tariff.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about_us',
    component:AboutComponent,
    data: { title: 'About Us' }
  },
  {
    path: 'tariff',
    component:TariffComponent,
    data: { title: 'Tariff' }
  },
  {
    path: 'faq&tc',
    component:FaqComponent,
    data: { title: 'FAQ & TC' }
  },
  {
    path: 'cancel&lugg',
    component:CancelComponent,
    data: { title: 'Cancel & Luggage' }
  },
  {
    path: 'contact',
    component:ContactComponent,
    data: { title: 'Contact' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
