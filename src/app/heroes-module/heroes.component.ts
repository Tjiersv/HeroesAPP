import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { AppState } from '../store/app.reducers';
import { getHeroes } from '../store/actions';
import { Heroe } from '../shared/classes/heroe';
import { HeroesService } from '../shared/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  title = 'Lista de Heroes';
  heroes: Heroe[] = [];
  searchString: string;
  page = 0;
  total = 0;

  heroesSubs: Subscription;

  constructor(
    private store: Store<AppState>,
    public heroesService: HeroesService
  ) { }

  ngOnInit(): void { 
    this.heroesSubs = this.store
    .select('heroes')
    .subscribe(({ heroes, total, page }) => {
      this.heroes = heroes;
      this.page = page;
      this.total = total;
      console.log('GETHEROES')
    });
    this.submitSearch(this.page);
  }

  ngOnDestroy() {
    this.heroesSubs.unsubscribe();
  }

  submitSearch(page?: number) {
    // this.heroesService
    //   .getHeroes(this.searchString, page)
    //   .subscribe(({total, data}) => { 
    //     console.log(total, this.heroesService.step, data);
    //     this.heroes = data.map(({id, name, description, modified, thumbnail, resourceURI, teamColor, ...rest}) => new Heroe(id, name, description, modified, thumbnail, resourceURI, this.heroesService.getTeamColor(id)))
    //     this.heroesService.total = Math.ceil(total / this.heroesService.step);
    //   });
    this.store.dispatch( getHeroes({ page }) );
  }

  prevPage() {
    //this.submitSearch(this.heroesService.page - 1);
    this.submitSearch(this.page - 1);
  }

  nextPage() {
    //this.submitSearch(this.heroesService.page + 1);
    this.submitSearch(this.page + 1);
  }

}
