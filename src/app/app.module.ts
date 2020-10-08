import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
// COMPONENTS
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// MODULES
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes-module/heroes.module';
import { SharedModule } from './shared/shared.module';
import { ContactoModule } from './contacto/contacto.module';
import { EffectsArray } from './store/effects/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContactoModule,
    SharedModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
