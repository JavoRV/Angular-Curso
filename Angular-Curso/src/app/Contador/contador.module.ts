import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { contadorComponent } from './contador/contador.component';

 @NgModule({
    declarations: [
        contadorComponent,
    ],
    exports: [ //Que cosas pueden ser visibles fuera del modulo
        contadorComponent

    ],
    imports: [ //Solo van modulos
        CommonModule,
    ]
})
export class ContadorModule{}