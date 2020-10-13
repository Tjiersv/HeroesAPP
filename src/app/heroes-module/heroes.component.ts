import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../store/app.reducers';
import { Heroe } from '../shared/classes/heroe';
import { HeroesService } from '../shared/services/heroes.service';
import { getHeroes } from '../store/actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public title = 'Lista de Heroes';
  public heroes: Heroe[] = [];
  public searchString: string;
  public page = 0;
  public total = 0;

  constructor(
    private store: Store<AppState>,
    public heroesService: HeroesService
  ) { }

  ngOnInit(): void { 
    this.submitSearch(this.page);
  }

  submitSearch(page?: number) {
    // this.heroesService
    //   .getHeroes(this.searchString, page)
    //   .subscribe(({total, data}) => { 
    //     console.log(total, this.heroesService.step, data);
    //     this.heroes = data.map(({id, name, description, modified, thumbnail, resourceURI, teamColor, ...rest}) => new Heroe(id, name, description, modified, thumbnail, resourceURI, this.heroesService.getTeamColor(id)))
    //     this.heroesService.total = Math.ceil(total / this.heroesService.step);
    //   });
    this.store
      .select('heroes')
      .subscribe(({ heroes, total, page }) => {
        this.heroes = heroes;
        this.page = page;
        this.total = total;
      });
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
