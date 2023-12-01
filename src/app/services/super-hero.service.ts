import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Superhero } from '../models/siper-herto';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';

  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`https://localhost:7015/api/${this.url}`);
  }

  public updateHero(hero: Superhero): Observable<Superhero[]> {
    return this.http.put<Superhero[]>(
      `https://localhost:7015/api/${this.url}`,
      hero
    );
  }

  public createHero(hero: Superhero): Observable<Superhero[]> {
    return this.http.post<Superhero[]>(
      `https://localhost:7015/api/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: Superhero): Observable<Superhero[]> {
    return this.http.delete<Superhero[]>(
      `https://localhost:7015/api/${hero.id}`
    );
  }
}