import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HeroesService
  ]
})
export class SharedModule { }
