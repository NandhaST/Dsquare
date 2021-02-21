import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TariffComponent } from './tariff/tariff.component';
import { FaqComponent } from './faq/faq.component';
import { CancelComponent } from './cancel/cancel.component';



@NgModule({
  declarations: [ContactComponent, AboutComponent, TariffComponent, FaqComponent, CancelComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
