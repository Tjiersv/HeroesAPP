import { Component, OnInit } from '@angular/core';
import { Heroe } from '../shared/classes/heroe';
import { HeroesService } from '../shared/services/heroes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public title = 'Lista de Heroes';
  public heroes: Heroe[] = [];
  public searchString: string;

  constructor(public heroesService: HeroesService) { }

  ngOnInit(): void { this.submitSearch(0) }

  submitSearch(page?: number) {
    this.heroesService
      .getHeroes(this.searchString, page)
      .subscribe(({total, data}) => { 
        console.log(total, this.heroesService.step, data);
        this.heroes = data.map(({id, name, description, modified, thumbnail, resourceURI, teamColor, ...rest}) => new Heroe(id, name, description, modified, thumbnail, resourceURI, this.heroesService.getTeamColor(id)))
        this.heroesService.total = Math.ceil(total / this.heroesService.step);
      });
  }

  prevPage() {
    this.submitSearch(this.heroesService.page - 1)
  }

  nextPage() {
    this.submitSearch(this.heroesService.page + 1);
  }

}
