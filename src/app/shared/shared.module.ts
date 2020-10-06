import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes.service';
import { FormatNumberPipe } from './pipes/format-number.pipe';

@NgModule({
  declarations: [FormatNumberPipe],
  imports: [
    CommonModule
  ],
  providers: [
    HeroesService
  ]
})
export class SharedModule { }
