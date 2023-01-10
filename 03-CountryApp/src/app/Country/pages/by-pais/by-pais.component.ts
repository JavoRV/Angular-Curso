import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
})
export class ByPaisComponent {

  termino: string = '';
  TipoError: boolean = false;
  paises: CountryModel[] = [];

  constructor(private countryService: CountryService) { }

  buscar() {

    this.TipoError = false;
    console.log(this.termino)

    this.countryService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, (erro) => {
        this.TipoError = true;
        this.paises = [];
      });
  }
}
