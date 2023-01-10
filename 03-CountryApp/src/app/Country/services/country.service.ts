import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private ApiUrl : string = 'https://restcountries.com/v2'

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ) : Observable<CountryModel[]> {

    const url = `${ this.ApiUrl }/name/${ termino }`;
    return this.http.get<CountryModel[]>(url);
  }

}
