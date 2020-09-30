import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Heroe } from 'src/app/shared/classes/heroe';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private protocol = environment.protocol;
  private ApiUrl = environment.apiUrl;
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

  private getPathApi() {
    return `${this.protocol}://${this.ApiUrl}`;
  };

  private validatePage(page?: number) {
    if (page || page === 0) { this.page = page };
  }

  private getSearchPath(nameStartsWith?: string) {
    return (nameStartsWith) ? `&nameStartsWith=${nameStartsWith}` : '';
  }

  private getPagination() {
    return `&offset=${this.page * this.step}`;
  }

  resetPager() { this.page = 0; }

  getHeroes(nameStartsWith?: string, page?: number) {
    this.validatePage(page);
    const url = `${this.getPathApi()}characters?apikey=${environment.apiKey}${this.getPagination()}${this.getSearchPath(nameStartsWith)}`;
    console.log(url);
    return this.http.get<any>(url);
  }

  getHeroe(id: string) {
    const url = `${this.getPathApi()}characters/${id}?apikey=${environment.apiKey}`;
    return this.http.get<any>(url);
  }

  getTeamColor(id): string {
    debugger;
    if (this.teams.get(id) != undefined) {
      return this.teams.get(id);
    } else {
      return "";
    }
  }

}
