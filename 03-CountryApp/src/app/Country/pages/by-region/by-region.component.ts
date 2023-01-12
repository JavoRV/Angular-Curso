import { Component } from '@angular/core';
import { CountryModel } from '../../interfaces/pais.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles:[`
  
  button{
    margin-right: 10px;
  }
  
  `]
})
export class ByRegionComponent {

  constructor( private countryService: CountryService ){}

  regiones : string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: CountryModel[] = [];
  page: number = 1;


  getClaseCss (region: string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises = [];
    this.page = 1;

    console.log(this.regionActiva);

    this.countryService.buscarRegion(region)
      .subscribe((paises) => {
        console.log(paises);
        this.page = this.page;
        this.paises = paises;
      })
  }
}
