import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports:[
    GifsPageComponent,
  ]
})
export class GifsModule { }
