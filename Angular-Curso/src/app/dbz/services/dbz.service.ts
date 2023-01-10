import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
   
  private _personajes: Personaje[] = [
    {
      nombre: 'Yamcha',
      poder: 500
    },
    {
      nombre:'Bulma',
      poder: 1000
    }
  ];

  get personajes() : Personaje[]{
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(data : Personaje){
    this._personajes.push( data )
  }

}