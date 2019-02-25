import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
            this.convertido = "Porque convertir galon a galon? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "2":{
            this.convertido = this.cantIngresada * 4;
            break;
          }
          case "3":{
            this.convertido = this.cantIngresada * 3.78541;
            break;
          }

        }
        break;
      }
      case "2":{
        switch(this.unidToDoConvert){
          case "1":{
            this.convertido = this.cantIngresada * 0.25 ;
            break;
          }
          case "2":{
            this.convertido = "Porque convertir cuarto a cuarto? :v, weno es: "+this.cantIngresada;
            break;
          }
          case "3":{
              this.convertido = this.cantIngresada * 0.946353;
            break;
          }

        }
        break;
      }
      case "3":{
        switch(this.unidToDoConvert){
          case "1":{

              this.convertido = this.cantIngresada * 0.264172;
            break;
          }
          case "2":{
              this.convertido = this.cantIngresada * 1.05669;
            break;
          }
          case "3":{
              this.convertido = "Porque convertir litro a litro? :v, weno es: "+this.cantIngresada;
            break;
          }

        }
        break;
      }
    }
  }
}
