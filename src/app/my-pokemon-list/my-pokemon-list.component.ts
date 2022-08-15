import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../data-services.service';

@Component({
  selector: 'app-my-pokemon-list',
  templateUrl: './my-pokemon-list.component.html',
  styleUrls: ['./my-pokemon-list.component.scss']
})
export class MyPokemonListComponent implements OnInit {
  pokemons: any []= [];

  constructor(
    private dataServices: DataServicesService
  ) { }

  ngOnInit(): void {
    this.dataServices.getPokemon()
    .subscribe((data: any) => {
     data.results.forEach((result: any ) => {
       this.dataServices.getMorePokemon(result.name)
       .subscribe((eachData:any) => {
          this.pokemons.push(eachData);
          console.log(this.pokemons);
       });
     });
    });
  }
}