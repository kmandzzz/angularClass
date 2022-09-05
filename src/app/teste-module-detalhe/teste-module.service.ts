import { Injectable } from "@angular/core";

@Injectable()

export class TesteModuleService {
  getTesteModuleService(){
    return ['Feijão', 'Arroz', 'Batata'];
  }
}