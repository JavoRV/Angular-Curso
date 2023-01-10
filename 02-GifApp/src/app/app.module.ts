import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Importación para servicios HTTP
    SharedModule,
    GifsModule,
    NgxPaginationModule
  ],
  
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
