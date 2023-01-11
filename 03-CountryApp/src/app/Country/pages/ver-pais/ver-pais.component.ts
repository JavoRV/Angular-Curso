import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent {

  constructor(private ActiveRoute    : ActivatedRoute,
              private CountryService : CountryService) { }

  ngOnInit(): void {

    this.ActiveRoute.params
    .pipe(
      switchMap( ({ Id }) => this.CountryService.getPaisById( Id ))
    )
    .subscribe( resp => {
      console.log( resp )
    })

   // this.ActiveRoute.params
   //   .subscribe(({ Id }) => { 
   //     console.log(Id); 

   //     this.CountryService.getPaisById( Id )
   //       .subscribe( pais => {
   //         console.log( pais ); 
   //      })  
   //   })

  }

}
