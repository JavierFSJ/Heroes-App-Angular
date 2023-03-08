import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { ProgressBarService } from '../../../services/progress-bar.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  heroesObs$ = new Observable<Heroe[]>;

  constructor(private heroesServices: HeroesService,
              private progressBarService:ProgressBarService) {}

  ngOnInit(): void {

    this.heroesObs$ = this.progressBarService.showProgressBarUntilComplete(this.heroesServices.getHeroes());

  }
}
