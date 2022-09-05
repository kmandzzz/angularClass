import { Injectable } from "@angular/core";

@Injectable() //decorator - metadado que permite a classe de ser ficar disponível para ser injetada para criação  
export class CursoService {

  getCursos(){
    return  ['JavaScript, PHP, Java, Estrutura de dados'];
  }
}