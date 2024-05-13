import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  searchCharacter(query = '', page = 1) {
    const filter = `${environment.baseURL}?name=${query}&page=${page}`;
    return this.http.get<Character[]>(
      filter
    );
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseURL}/${id}`);
  }
}
