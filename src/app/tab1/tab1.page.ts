import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
            this.convertido = "Porque convertir pulgada a pulgada? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "2":{
            this.convertido = this.cantIngresada * 0.0833333;
            break;
          }
          case "3":{
            this.convertido = this.cantIngresada * 0.0277778;
            break;
          }
          case "4":{
              this.convertido = this.cantIngresada * 0.0000157832598024;
            break;
          }
          case "5":{

              this.convertido = this.cantIngresada * 0.02540002032;
            break;
          }

        }
        break;
      }
      case "2":{
        switch(this.unidToDoConvert){
          case "1":{
            this.convertido = this.cantIngresada * 12.0000096;
            break;
          }
          case "2":{
            this.convertido = "Porque convertir pie a pie? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "3":{
              this.convertido = this.cantIngresada * 0.333333;
            break;
          }
          case "4":{

              this.convertido = this.cantIngresada * 0.000189394;
            break;
          }
          case "5":{

              this.convertido = this.cantIngresada * 0.3048;
            break;
          }

        }
        break;
      }
      case "3":{
        switch(this.unidToDoConvert){
          case "1":{

              this.convertido = this.cantIngresada * 36;
            break;
          }
          case "2":{
              this.convertido = this.cantIngresada * 3;
            break;
          }
          case "3":{
              this.convertido = "Porque convertir yarda a yarda? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "4":{

              this.convertido = this.cantIngresada * 0.000568182;
            break;
          }
          case "5":{

              this.convertido = this.cantIngresada * 0.9144;
            break;
          }

        }
        break;
      }
      case "4":{
        switch(this.unidToDoConvert){
          case "1":{

              this.convertido = this.cantIngresada * 63360;
            break;
          }
          case "2":{

              this.convertido = this.cantIngresada * 5280;
            break;
          }
          case "3":{

              this.convertido = this.cantIngresada * 1760;
            break;
          }
          case "4":{

              this.convertido = "Porque convertir milla a milla? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "5":{

              this.convertido = this.cantIngresada * 1609.34;
            break;
          }

        }
        break;
      }
      case "5":{
        switch(this.unidToDoConvert){
          case "1":{

              this.convertido = this.cantIngresada * 39.3701;
            break;
          }
          case "2":{

              this.convertido = this.cantIngresada * 3.28084;
            break;
          }
          case "3":{

              this.convertido = this.cantIngresada * 1.09361;
            break;
          }
          case "4":{

              this.convertido = this.cantIngresada * 0.000621371;
            break;
          }
          case "5":{

              this.convertido = "Porque convertir metro a metro? :v, weno es: "+this.cantIngresada;
            break;
          }

        }
        break;
      }

    }
  }
}
