import { Component, Input, OnInit } from '@angular/core';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent implements OnInit{

  public page! : number;

  @Input() paises: CountryModel[] =[];

  constructor() { }

  ngOnInit(): void {
  }
}
