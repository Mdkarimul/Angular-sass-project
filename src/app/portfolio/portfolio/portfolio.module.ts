import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrandComponent } from '../brand/brand.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EnrichedComponent } from '../enriched/enriched.component';
import { SendMessageComponent } from '../send-message/send-message.component';
@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    BrandComponent,
    EnrichedComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FontAwesomeModule,
    CarouselModule
  ]
})
export class PortfolioModule { }
