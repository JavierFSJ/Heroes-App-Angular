import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string =  environment.baseUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroe( id: string): Observable<Heroe>{
    const url =  `${this.baseUrl}/heroes/${id}`;
    return this.http.get<Heroe>(url);
  }

  getHeroeSugerencias ( termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=5`)
  }
}
