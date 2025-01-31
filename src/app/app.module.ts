import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HTTP

import { AppComponent } from './app.component';
import { ProductoDisplayDirective } from './producto-display.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductoDisplayDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Añádelo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

