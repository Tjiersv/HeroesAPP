import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPollComponent } from './modal-poll.component';
import { HeroeProfileComponent } from '../hero-profile/heroe-profile.component';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroesService } from '../../../shared/services/heroes.service';
import { HttpClient } from '@angular/common/http';

describe('ModalPollComponent', () => {
  let component: ModalPollComponent;
  let heroeProfileComponent: HeroeProfileComponent;
  let fixture: ComponentFixture<ModalPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ModalPollComponent,
        HeroeProfileComponent
      ]
    })
    .compileComponents(); 
    // service
    let http: HttpClient;
    let router: ActivatedRoute;
    let location: Location;
    const serviceMock = new HeroesService(http);  
    heroeProfileComponent = new HeroeProfileComponent(router, serviceMock, location);
    heroeProfileComponent.launchModal();  
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
  });

});
