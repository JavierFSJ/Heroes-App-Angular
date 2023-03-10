import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable, delay, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string =  environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
              .pipe(
                shareReplay()
              )
  }

  getHeroe( id: string): Observable<Heroe>{
    const url =  `${this.baseUrl}/heroes/${id}`;
    return this.http.get<Heroe>(url);
  }

  getHeroeSugerencias ( termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=5`)
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes` , heroe);
  }

  actulizarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}` , heroe);
  }

  eliminarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.delete<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`);
  }
}
