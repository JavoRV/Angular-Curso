import { NgModel } from "@angular/forms";
import { HeroeComponent } from './Heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Que cosas pueden ser visibles fuera del modulo
        ListadoComponent,

    ],
    imports: [ //Solo van modulos
        CommonModule
    ]
})
export class HeroesModule{}