import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
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
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

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

    if(this.heroe.id){
      //ACTUALIZA HEROE
      this.heroesService.actulizarHeroe(this.heroe).subscribe( resp => {
        this._snackBar.open(`Heroe Actulizado ${resp.superhero}`, 'Cerrar');
      });
    }
    else{
      this.heroesService.agregarHeroe(this.heroe).subscribe( resp => {
        this._snackBar.open(`Heroe Agregado ${resp.superhero}`, 'Cerrar' , {
          duration: 3000,
        });
        this.router.navigate(['/heroes/editar' , resp.id]);
      })
    }
  }


  eliminar(){
    if(this.heroe.id){
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.heroesService.eliminarHeroe(this.heroe).subscribe( resp => {
            this._snackBar.open(`Heroe Eliminado`, 'Cerrar' , {
              duration: 3000,
            });
            this.router.navigate(['/heroes/list']);
          });
        }
      });
    }
  }


}
