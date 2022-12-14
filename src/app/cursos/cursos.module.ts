
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule //  contém as diretivas e pipes mais comuns para ser utilizado na aplicação 
    
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],

  exports: [
    CursosComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule { }
