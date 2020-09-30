import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const DATA_MOCK = [
  {
    id: '1',
    name: 'Spiderman',
    description: 'El hombre que araña',
    modified: new Date(1518417160),
    thumbnail:
    {
      'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
      'extension': 'jpg'
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    teamColor: 'yellow'
  },
  {
    id: '2',
    name: 'Ironman',
    description: 'El hombre depresivo e inteligente',
    modified: new Date(1518417160),
    thumbnail:
    {
      'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
      'extension': 'jpg'
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
    teamColor: 'azul'
  }
];

export class MockHeroService {
  public teams = new Map().set("1", "yellow");

  public getHeroe(id) {
    console.log('IDSERVICE', id);
    //console.log('HeroeService', this.createData(DATA_MOCK.filter(data => data.id === id)));
    return of(this.createData(DATA_MOCK.filter(data => data.id === id))).pipe(delay(1000));
  }

  public getTeamColor() {
    return "yellow";
  }

  private createData(results: Object[]) {
    return {
      "data": {
        results
      },
      "total": results.length
    };
  }

}

