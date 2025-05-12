import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientGalleryComponent } from './client-gallery/client-gallery.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ConnectComponent } from './connect/connect.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'client-gallery', component: ClientGalleryComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'portfolios', component: PortfoliosComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
