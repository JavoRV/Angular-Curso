import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({ //Decorador
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  //@ViewChild es un decorador que permite referenciar una instancia de un componente.
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;  //Operador ! es para decir que siempre tendra valor la variable

  constructor(private gifsService: GifsService) { }

  buscar() {
    const data = this.txtBuscar.nativeElement.value;

    if (data.trim().length === 0) { return; }//Validacion de que si esta vacio no se agrega

    this.gifsService.buscarGifs(data);
    this.txtBuscar.nativeElement.value = ''; //Aqui al escribir algo limpiria la caja de texto
  }
}
