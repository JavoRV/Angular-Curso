import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif, Images } from '../interface/gifs.interface';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _historial: string[] = [];
  private api_key: string = 'cW8wCuw6X65V12oKVQzwHj6ZLJWKJuid';
  private api_Url: string = 'https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  get lastResult() {
    return [...this.resultados];
  }

  constructor(private http: HttpClient) { //Inyección en el constructor para peticiones http
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //Guarda el historial
    this.resultados = JSON.parse(localStorage.getItem('lastResult')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase(); //Todo lo introducido sera en minuscula

    if (!this._historial.includes(query)) { //Valida si ya existe en el query "Includes" , sino existe inserta
      this._historial.unshift(query); //Inserta el valor 
      this._historial = this._historial.splice(0, 10); //Solo deja meter hasta 10 de historial

      localStorage.setItem('historial', JSON.stringify(this._historial)); //JSON.stringify(Convierte arreglos en string)
    }

    const params = new HttpParams()
                      .set('api_key', this.api_key)
                      .set('q', query)
                      .set('limit', '25');
    
    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.api_Url}/search?${ params }`)
      .subscribe((response) => {
        this.resultados = response.data;
        localStorage.setItem('lastResult', JSON.stringify(this.lastResult)); //
      })
  }
}
