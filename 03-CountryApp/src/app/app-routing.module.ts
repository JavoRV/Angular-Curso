import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByPaisComponent } from './Country/pages/by-pais/by-pais.component';
import { ByRegionComponent } from './Country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './Country/pages/by-capital/by-capital.component';
import { VerPaisComponent } from './Country/pages/ver-pais/ver-pais.component';

const routes: Routes = [ //Configuración de Rutas

    {
        path: '',
        component: ByPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'pais/:Id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule
    ]
  })
export class AppRoutingModule{}