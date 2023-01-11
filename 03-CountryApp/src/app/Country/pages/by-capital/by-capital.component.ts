import { Component } from '@angular/core';
import { CountryModel } from '../../interfaces/pais.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  termino: string = '';
  TipoError: boolean = false;
  paises: CountryModel[] = [];
  
  constructor(private countryService: CountryService) { }

  buscar(termino: string) {

    this.TipoError = false;
    this.termino = termino;
    console.log(this.termino)

    this.countryService.buscarCapital(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, (erro) => {
        this.TipoError = true;
        this.paises = [];
      });
  }
}