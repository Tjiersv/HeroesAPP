import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes.component";
import { HeroeProfileComponent } from "./components/hero-profile/heroe-profile.component";
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'heroe/:id',
    component: HeroeProfileComponent
  },
  { 
    path: 'modal-poll',
    component: ModalPollComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }