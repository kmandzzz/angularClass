import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service'; //importar o serviço

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService] //fornecer o serviço 
})
export class CursosComponent  {

  testeTitulo = 'Isso aqui é um teste';
  linguagens; //atributo local a ser populado

  constructor(cursoService: CursoService){
    this.linguagens = cursoService.getCursos(); //chamada de método de serviço
  }

  //dentro do construtor foi criado uma variavel e lhe foi atribuído a injeção de dependência.

   }

 
