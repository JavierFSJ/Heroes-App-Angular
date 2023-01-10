import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe( resp => {
      this.heroes = resp;
    });
  }
}
