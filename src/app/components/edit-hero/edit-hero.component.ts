import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Superhero } from 'src/app/models/siper-herto';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: Superhero;
  @Output() heroesUpdated = new EventEmitter<Superhero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(hero: Superhero) {
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: Superhero[]) => this.heroesUpdated.emit(heroes));
  }

  deleteHero(hero: Superhero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: Superhero[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero: Superhero) {
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: Superhero[]) => this.heroesUpdated.emit(heroes));
  }
}