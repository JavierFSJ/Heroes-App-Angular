import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe! : Heroe;
  constructor(private activaedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
   this.activaedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroe(id))
    )
    .subscribe( hero => this.heroe = hero);
  }

}
