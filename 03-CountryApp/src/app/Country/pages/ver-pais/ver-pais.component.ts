import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent {

  pais! : CountryModel;

  constructor(private ActiveRoute    : ActivatedRoute,
              private CountryService : CountryService) { }

  ngOnInit(): void {
     this.ActiveRoute.params
     .pipe(
       switchMap( ({ Id }) => this.CountryService.getPaisById( Id )),    
       tap( console.log )
       
     )
     .subscribe( pais => this.pais = pais)
     
  //  this.ActiveRoute.params
  //    .subscribe(({ Id }) => { 
  //      console.log(Id); 

  //      this.CountryService.getPaisById( Id )
  //        .subscribe( pais => {
  //          console.log( pais ); 
  //       })  
  //    })

  }

}
