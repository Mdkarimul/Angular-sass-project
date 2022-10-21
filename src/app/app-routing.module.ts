import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{ path: '', loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) },
{ path: 'portfolio', loadChildren: () => import('./portfolio/portfolio/portfolio.module').then(m => m.PortfolioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
