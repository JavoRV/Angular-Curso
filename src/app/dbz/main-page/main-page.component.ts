import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  personajes: Personaje[] = [{
    nombre: 'Yamcha',
    poder: 500
  },
  {
    nombre:'Bulma',
    poder: 1000
  }
];

nuevo: Personaje = {
  nombre: 'Mr. Roshi',
  poder: 2000
}

agregarNuevoPersonaje( character: Personaje ){
  // debugger;
  
  this.personajes.push( character);
  
}
}
