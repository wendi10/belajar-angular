import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider/slider.component';

import { SliderService } from './service/slider.service';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavBarComponent,
    SliderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'ajukan-pinjaman', component: FormComponent}
    ])
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
