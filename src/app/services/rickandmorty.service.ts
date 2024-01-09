import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../models/detail.interface';


@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>('https://rickandmortyapi.com/api/character/').pipe(
      map((response: any) => response.results as Character[]));
  }

  getCharacterById(id: String): Observable<Character> {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character/' + id );
  }
}
