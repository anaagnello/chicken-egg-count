import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ChickenListComponent } from './chicken-list/chicken-list.component';
import { ChickenComponent } from './chicken/chicken.component';
import { ChickenService } from './chicken.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ChickenListComponent },
      { path: 'home', component: ChickenListComponent },
      { path: 'chicken', component: ChickenListComponent },
      { path: 'chicken/:id', component: ChickenComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ChickenListComponent,
    ChickenComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ChickenService]
})
export class AppModule { }