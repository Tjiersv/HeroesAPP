import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { Heroe } from 'src/app/shared/classes/heroe';
import { HeroesService } from '../../../shared/services/heroes.service';

@Component({
  selector: 'app-heroe-profile',
  templateUrl: './heroe-profile.component.html',
  styleUrls: ['./heroe-profile.component.css']
})
export class HeroeProfileComponent implements OnInit {

  @ViewChild('modal') modal;

  private id;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.heroesService
          .getHeroe(this.id)
          .pipe(map(data => data.data.results))
          .subscribe(res => {
            const {id, name, description, modified, thumbnail, resourceURI, teamColor, ...rest} = res[0];
            this.heroe = new Heroe(id, name, description, modified, thumbnail, resourceURI, this.heroesService.getTeamColor(id));
        });
    });
  }

  goBack() {
    this.location.back();
  }

  launchModal():void{
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  getTeam(team):void{
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
    //let mani = this.heroesService.getTeamColor(this.heroe.id);
  }

}
