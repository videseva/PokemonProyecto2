import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Pokemon } from '../Models/Pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 private API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPokemon(): Observable <Pokemon[]>{
    return this.http.get<Pokemon[]>(this.API_URL).pipe(
      tap(_ => console.log('Datos Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Pokemon[])
      })
      );
  }
}
