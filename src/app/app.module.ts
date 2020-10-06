import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes-module/heroes.module';
import { ContactoModule } from './contacto/contacto.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContactoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
