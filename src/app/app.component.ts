import { Component } from '@angular/core';
import {Superhero  } from './models/siper-herto';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: Superhero[] = [];
  heroToEdit?: Superhero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: Superhero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: Superhero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new Superhero();
  }

  editHero(hero: Superhero) {
    this.heroToEdit = hero;
  }
}