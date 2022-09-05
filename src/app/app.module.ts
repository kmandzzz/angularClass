import { TesteModuleModule } from './teste-module/teste-module.module';

import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação para ser rodada no brownser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //modulo de formulário
import { HttpModule } from '@angular/http'; //contém objeto http para fazer requisições ajax 

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations:  [ //todos os componentes, deritivas e pipes q queremos usar no mdulo
    AppComponent
    
  ],
  imports: [ //outros modulos que queremos utilizar no root ou um modulo q esteja dentro do componente 
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    TesteModuleModule
  ],
  providers: [], //fornecedor - serviços que vao ficar disponiveis para todos os componenetes declarados, também como verificação de login, guardas de rotas declara no providers pois ter escopo global da app
  bootstrap: [AppComponent]
})
export class AppModule { }
