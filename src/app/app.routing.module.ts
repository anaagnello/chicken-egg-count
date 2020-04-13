import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickenListComponent } from './chicken-list/chicken-list.component';
import { ChickenComponent } from './chicken/chicken.component';


const routes: Routes = [
  { path: 'home', component: ChickenListComponent,  },
  { path: 'restaurant', component: RestaurantListComponent, canActivate: [LoginGuard] },
  { path: 'restaurant/detail/:id', component: RestaurantDetailComponent, canActivate: [LoginGuard] },
  { path: 'shop', component: ShoppingListComponent, canActivate: [LoginGuard] },
  { path: 'shop/detail/:id', component: ShoppingDetailComponent, canActivate: [LoginGuard] },
  { path: 'attraction', component: AttractionListComponent, canActivate: [LoginGuard] },
  { path: 'attraction/detail/:id', component: AttractionDetailComponent, canActivate: [LoginGuard] },
  { path: 'hotel', component: HotelListComponent, canActivate: [LoginGuard] },
  { path: 'hotel/detail/:id', component: HotelDetailComponent, canActivate: [LoginGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [LoginGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [LoginGuard] },
  { path: 'transport', component: TransportListComponent, canActivate: [LoginGuard] },
  { path: 'gioiosa', component: GioiosaComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }