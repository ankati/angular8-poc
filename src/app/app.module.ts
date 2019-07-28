import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibModule } from './lib/lib.module';
import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Form1Component,
    Form2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
