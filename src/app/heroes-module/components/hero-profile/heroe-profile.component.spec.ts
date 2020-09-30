import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HeroeProfileComponent } from './heroe-profile.component';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { MockHeroService } from 'src/app/shared/mocks/MockHeroService';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import MockHeroe from 'src/app/shared/mocks/MockHeroe';

describe('HeroProfileComponent', () => {
  
  let component: HeroeProfileComponent;
  let fixture: ComponentFixture<HeroeProfileComponent>;
  let heroesService: HeroesService;
  let heroeMock = MockHeroe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroeProfileComponent,
        ModalPollComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroesService, useClass: MockHeroService },
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    heroesService = TestBed.inject(HeroesService);
    fixture = TestBed.createComponent(HeroeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test getHeroe by OnInit', () => {
    spyOn(heroesService, 'getHeroe').and.callThrough();
    component.ngOnInit();
    setTimeout(() => {
      //console.log('HEROETEST', component.heroe);
      //console.log('HEROETEST2', heroeMock);
      //console.log('EQUAL', JSON.stringify(component.heroe) === JSON.stringify(heroeMock));
      expect(component.heroe).toEqual(heroeMock);
    }, 1500);
  });

  it('Test launchModal function', () => {
    component.launchModal();
    expect(component.question_modal).toBe("¿En cual grupo quieres colocar a tu súper héroe?");
  });

  it('Test getTeam function', () => {
    component.getTeam(component.heroe.teamColor);
    expect(component.question_modal).toBe("¿En cual grupo quieres colocar a tu súper héroe?");
  });

});
