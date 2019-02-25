import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public unidToConvert;
  public unidToDoConvert;
  public convertido;
  public cantIngresada;

  constructor(){
    this.convertido = 0.0;
    this.cantIngresada = 0.0;
  }

  convertir(){
    switch(this.unidToConvert){
      case "1":{
        switch(this.unidToDoConvert){
          case "1":{
            this.convertido = "Porque convertir libra a libra? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "2":{
            this.convertido = this.cantIngresada * 16;
            break;
          }
          case "3":{
            this.convertido = this.cantIngresada * 0.000453592;
            break;
          }

        }
        break;
      }
      case "2":{
        switch(this.unidToDoConvert){
          case "1":{
            this.convertido = this.cantIngresada * 0.0625 ;
            break;
          }
          case "2":{
            this.convertido = "Porque convertir onza a onza? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "3":{
              this.convertido = this.cantIngresada * 0.00002835;
            break;
          }

        }
        break;
      }
      case "3":{
        switch(this.unidToDoConvert){
          case "1":{

              this.convertido = this.cantIngresada * 2204.62;
            break;
          }
          case "2":{
              this.convertido = this.cantIngresada * 35274;
            break;
          }
          case "3":{
              this.convertido = "Porque convertir tonelada a tonelada? :v, weno es: "+this.cantIngresada;
            break;
          }

        }
        break;
      }
    }
  }
}
