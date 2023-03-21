import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Cuando voy a requerir hacer peticiones http, en el constructor debo especificarlo
  constructor(private http: HttpClient) {}

  // Obtener usuarios
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // opciones del menu
  getMenuopciones() {
    return this.http.get<Componente[]>('/assets/data/menu-opciones.json');
  }

  //Obtener albums
  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes() {
    return this.http
      .get<Componente[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}
