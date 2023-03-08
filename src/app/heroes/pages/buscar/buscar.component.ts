import { Component, OnInit } from '@angular/core';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { ProgressBarService } from '../../../services/progress-bar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroesObs$ = new Observable<Heroe[]>;
  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesService: HeroesService,
    private progressBarService: ProgressBarService) { }

  ngOnInit(): void {
  }

  buscando(): void {
    this.heroesObs$ = this.heroesService.getHeroeSugerencias(this.termino)
  }

  opcionSeleccionada(event: MatAutocompleteActivatedEvent) {

    if (!event.option?.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option?.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);
  }
}
