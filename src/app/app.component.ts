import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edades';

  edades: number[] = [];
  promedio: number | undefined;

  calcularPromedio(){ 
    this.promedio = this.edades.reduce((avg,edad,_,{length}) => {
      return avg + edad / length;
    },0);
  }

  resetearTodas(){
    this.edades.length = 0;
    this.promedio = undefined;
  }

  mostrarPromedio(){
    if(this.edades.length >= 2 && this.edades.every(x => x > 0)){
      this.calcularPromedio();
    } else {
      alert("Edades inválidas. Ingrese dos enteros mayores a 0");
    }
  }
}
