import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HeaderComponent } from '../header/header.component';
import { ShowTimeComponent } from '../show-time/show-time.component';

@NgModule({
  declarations: [
    ContactComponent,
    HeaderComponent,
    ShowTimeComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    CarouselModule
  ]
})
export class ContactModule { }
