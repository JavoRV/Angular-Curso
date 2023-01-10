import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gif } from '../../gifs/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {

  get historial() {
    return this.gifsService.historial; //Retorna el metodo historial de Services
  }

  constructor(private gifsService: GifsService) { } //Inyecta GifsService de Services

  pick(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
}
