import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
        valor1: number = 0;
        valor2: number = 0;
        valor3: number = 0;
        resultado1: number = 0;
        resultado2: number = 0;
        resultado3: number = 0;


        CM_M(){
          this.resultado1 = this.valor1 / 100;
        }
        CM_M2(){
          this.resultado2 = this.valor2 / 100;
        }
        M_CM(){
          this.resultado1 = this.valor1 * 100;
        }
        M_CM2(){
          this.resultado2 = this.valor2 * 100;
        }
        CM_KM(){
          this.resultado1 = this.valor1 / 100000;
        }
        CM_KM3(){
          this.resultado3 = this.valor3 / 100000;
        }
        KM_CM(){
          this.resultado1 = this.valor1 * 100000;
        }
        KM_CM3(){
          this.resultado3 = this.valor3 * 100000;
        }
        M_KM(){
          this.resultado2 = this.valor2 / 1000;
        }
        M_KM3(){
          this.resultado3 = this.valor3 / 1000;
        }
        KM_M(){
          this.resultado2 = this.valor2 * 1000;
        }
        KM_M3(){
          this.resultado3 = this.valor3 * 1000;
        }

}
