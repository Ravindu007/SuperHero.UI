import { Injectable } from '@angular/core';
import { Superhero } from '../models/siper-herto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero"
   
  constructor(private http: HttpClient) { }

  public getSuperHeros() : Observable<Superhero[]>
  { 
   return this.http.get<Superhero[]>(`https://localhost:7015/api/${this.url}`);
  }
}
