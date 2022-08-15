import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(
    private http:HttpClient
  ) { }

  //get Pokemons from API
  getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  }
  getMorePokemon(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
