import { TesteModuleDetalheComponent } from './../teste-module-detalhe/teste-module-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TesteModuleDetalheComponent
  ],
  exports: [
    TesteModuleDetalheComponent
  ]
})
export class TesteModuleModule { }
