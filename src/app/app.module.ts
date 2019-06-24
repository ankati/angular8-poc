import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChinnaLibraryModule} from 'chinna-library'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibModule } from './lib/lib.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    ChinnaLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
