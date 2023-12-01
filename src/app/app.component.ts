import { Component } from '@angular/core';
import { Superhero } from './models/siper-herto';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuperHero.UI';

  heros: Superhero[] = [];
  
  constructor(private SuperHeroService: SuperHeroService) {}

  ngOnInit() : void{
    this.SuperHeroService
      .getSuperHeros()
      .subscribe((result: Superhero[]) => (this.heros = result))
    
  }
}
