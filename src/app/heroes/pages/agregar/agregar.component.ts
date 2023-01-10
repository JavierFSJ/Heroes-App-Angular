import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id: 'DC - Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel - Comics',
      desc: 'Marvel - Comincs',
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(private _snackBar: MatSnackBar,
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroe(id))
      )
      .subscribe( heroe => this.heroe = heroe)
  }


  save(){
    const fields = Object.values(this.heroe);
    fields.pop();
    if(fields.includes("")){
      this._snackBar.open('Todos los campos son requeridos', 'Cerrar');
      return;
    }

    this.heroesService.agregarHeroe(this.heroe).subscribe( resp => {
      this._snackBar.open(`Heroe Agregado ${resp.superhero}`, 'Cerrar');

    })
  }



}
