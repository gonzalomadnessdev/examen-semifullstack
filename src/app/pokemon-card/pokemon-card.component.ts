import { Component , Input} from '@angular/core';
import { PokeapiserviceService } from '../pokeapiservice.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input('id') id : number = 0;

  public data : any;

  constructor(
    private pokemonapiService : PokeapiserviceService
  ) {

  }

  ngOnInit(){
    this.pokemonapiService.getPokemon(this.id).subscribe((res)=>{
      this.data = res;
    })
  }

  get types() {
    return this.data.types.map((t : any) => t.type.name)
  }

}
