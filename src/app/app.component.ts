import { Component } from '@angular/core';
import { PokemonService } from './Services/pokemon.service';
import { Pokemon } from './Models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonProyecto';
  pokemons : Pokemon[]=[];
  
  constructor(private pokemonServices:PokemonService) { }

  ngOnInit() {
    this.getPokemon();

   }
   getPokemon(){
     this.pokemonServices.getPokemon().subscribe(result => {
       this.pokemons= result;
       console.log(this.pokemons)
     });
   }
}
