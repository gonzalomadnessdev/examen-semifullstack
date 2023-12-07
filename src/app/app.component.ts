import { Component } from '@angular/core';
import { PokeapiserviceService } from './pokeapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokeapp';

  selectedPokemons : SelectedPokemons = {
    water : null,
    electric: null,
    rock: null,
    fire: null
  }

  constructor(
    private pokemonapiService : PokeapiserviceService
  ) {

  }

  ngOnInit(){
    this.pokemonapiService.getFirePokemons().subscribe((res)=>{
      this.selectedPokemons.fire = this.selectRandPokemon(res)
    })
    this.pokemonapiService.getWaterPokemons().subscribe((res)=>{
      this.selectedPokemons.water = this.selectRandPokemon(res)
    })
    this.pokemonapiService.getElectricPokemons().subscribe((res)=>{
      this.selectedPokemons.electric = this.selectRandPokemon(res)
    })
    this.pokemonapiService.getRockPokemons().subscribe((res)=>{
      this.selectedPokemons.rock = this.selectRandPokemon(res)
    })
  }

  selectRandPokemon(pokemonList : {id: number, name: string}[]) {
    let max = pokemonList.length;
    let randNumber = Math.floor(Math.random() * (max + 1));

    return pokemonList[randNumber];
  }

}

interface SelectedPokemons {
  water : {id: number, name: string} | null
  electric : {id: number, name: string} | null
  rock : {id: number, name: string} | null
  fire : {id: number, name: string} | null
}
