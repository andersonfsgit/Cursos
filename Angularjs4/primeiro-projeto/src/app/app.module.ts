import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
