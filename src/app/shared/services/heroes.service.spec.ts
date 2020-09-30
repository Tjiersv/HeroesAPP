import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(HeroesService);
    let http: HttpClient;
    service = new HeroesService(http);

    service.teams.set('1', 'azul');
    service.teams.set('2', 'verde');
  
  });

  it('Test getTeamColor function id 1', () => {
    const teamColor = service.getTeamColor('1');
    expect(teamColor).toBe('azul');
  });

  it('Test getTeamColor function id 2', () => {
    const teamColor = service.getTeamColor('2');
    expect(teamColor).toBe('verde')
  });

  it('Test getTeamColor function id 3', () => {
    const teamColor = service.getTeamColor('3');
    expect(teamColor).toEqual('');
  });

});