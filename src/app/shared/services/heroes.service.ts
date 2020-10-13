import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Heroe } from 'src/app/shared/classes/heroe';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes: Array<Heroe> = [];
  public teams = new Map();
  public page = 0;
  public step = 20;
  public total = 0;
  public group_colors = {
    "azul": "#1f8ff7",
    "violeta": "#a43de3",
    "naranjo": "#df5c0f",
    "verde": "#0ea521"
  }

  constructor(private http: HttpClient) { }

  private getApiUrl(): string {
    return `${environment.protocol}://${environment.apiUrl}`;
    //return `${environment.protocol}://errorEnUrl${environment.apiUrl}`;
  };

  private getApiKey(): string {
    return `apikey=${environment.apiKey}`;
  }

  private getSearchPath(nameStartsWith?: string): string {
    if (nameStartsWith) {return `nameStartsWith=${nameStartsWith}`};
  }

  private getPagination(): string {
    return `offset=${this.page * this.step}`;
  }

  private getCharacterRoute(id?: string): string {
    return (id) ? `characters/${id}` : 'characters';
  }

  private generateUrl(route: string, query: string): string {
    return `${this.getApiUrl()}/${route}?${query}`;
  }

  private createQuery(queryArray: string[]) {
    return [this.getApiKey(), ...queryArray].join('&');
  }

  private validatePage(page?: number) {
    if (page || page === 0) { this.page = page };
  }

  resetPager() { this.page = 0; }

  getHeroes(nameStartsWith?: string, page?: number): Observable<any> {
    this.validatePage(page);
    const ROUTE = this.getCharacterRoute();
    const QUERY = this.createQuery([this.getPagination(), this.getSearchPath(nameStartsWith)]);
    const URL = this.generateUrl(ROUTE, QUERY);
    console.log('URL', URL);
    return this.http.get<any>(URL)
      .pipe(
        map(data => ({
          "total": data.data.total,
          "data": data.data.results
        }))
      );
  }

  getHeroe(id: string): Observable<any> {
    const ROUTE = this.getCharacterRoute(id);
    const QUERY = this.createQuery([]);
    const URL = this.generateUrl(ROUTE, QUERY);
    console.log('URL', URL);
    return this.http.get<any>(URL).pipe(map(data => data.data.results));
  }

  getTeamColor(id: string): string {
    if (this.teams.get(id) != undefined) { return this.teams.get(id); }
  }

}
