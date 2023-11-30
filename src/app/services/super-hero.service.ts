import { Injectable } from '@angular/core';
import { Superhero } from '../models/siper-herto';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeros() : Superhero[]
  { 
    let hero = new Superhero();
    hero.id = 1;
    hero.name = "Spider Man" ; 
    hero.firstName = "Peter" ; 
    hero.lastName = "Parker" ; 
    hero.place = "New York"

    return [hero]

  }
}
