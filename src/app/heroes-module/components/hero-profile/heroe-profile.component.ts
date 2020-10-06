import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { Heroe } from 'src/app/shared/interfaces/heroe';
import { HeroesService } from '../../../shared/services/heroes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  public team: string = "";
  

  public message: FormControl;
  public miGrupo: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.heroesService
          .getHeroe(this.id)
          .subscribe(res => {
            const { id, name, description, modified, thumbnail, resourceURI, teamColor, ...rest } = res[0];
            const teamLocal = this.heroesService.getTeamColor(id);
            this.heroe = {
              id,
              name,
              description,
              modified,
              thumbnail,
              resourceURI,
              'teamColor': (teamLocal) ? teamLocal : teamColor
            }
            //this.heroe = new Heroe(id, name, description, modified, thumbnail, resourceURI, this.heroesService.getTeamColor(id));
          });
      });
      

      //BASIC RACTIVE FORM
      this.message = new FormControl('', [Validators.required]);
      this.message.setValidators(Validators.maxLength(5));

      
      //REACTIVE FORM
      this.miGrupo = this.formBuilder.group({
        phone: [0, Validators.compose([Validators.required, Validators.min(0)])],
        email: ['', Validators.compose([Validators.required, Validators.email])]
      });

  }

  goBack() { this.location.back(); }

  launchModal(): void {
    this.question_modal = "¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  getTeam(team): void {
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
  }

  onSubmit() {
    console.log("-----------------------");
    console.log("MENSAJE", this.message);
    console.log("VALORES", this.message.value);
    console.log("VALIDACION", this.message.valid);
    console.log("VALIDACION", this.message.errors);
  }
  
  handleSubmit() {
    console.log("-----------------------");
    console.log("Mi GRUPO", this.miGrupo);
    console.log("CONTROLADORES", this.miGrupo.controls);
    console.log("VALORES", this.miGrupo.value);
    console.log("VALIDACION", this.miGrupo.valid);
    console.log("VALIDACION", this.miGrupo);
    this.message.setValue('Cambio el mensaje');

  }

}
