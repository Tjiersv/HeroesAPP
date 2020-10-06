import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroeProfileComponent } from './components/hero-profile/heroe-profile.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroeProfileComponent,
    ModalPollComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
