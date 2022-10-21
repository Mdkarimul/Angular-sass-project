import { NgModule } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrandComponent } from '../brand/brand.component';
import { CeoComponent } from '../ceo/ceo.component';
import { ServiceListComponent } from '../service-list/service-list.component';
import { SendMessageComponent } from '../send-message/send-message.component';
import { IndustriesComponent } from '../industries/industries.component';
import { AllSolutionComponent } from '../all-solution/all-solution.component';
import { ClientMessageComponent } from '../client-message/client-message.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    BrandComponent,
    CeoComponent,
    ServiceListComponent,
    SendMessageComponent,
    IndustriesComponent,
    AllSolutionComponent,
    ClientMessageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    RouterModule
  ]
 
})
export class HomeModule { }
