import { Component, OnInit } from '@angular/core';

import {TesteModuleService} from './teste-module.service';



@Component({
  selector: 'app-teste-module-detalhe',
  templateUrl: './teste-module-detalhe.component.html',
  styleUrls: ['./teste-module-detalhe.component.css'],
  providers: [TesteModuleService]
})
export class TesteModuleDetalheComponent  {
  
  testeModule;

  constructor(testeModuleService: TesteModuleService){
    this.testeModule = testeModuleService.getTesteModuleService();
  }

}
