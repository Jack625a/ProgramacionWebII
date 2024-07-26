import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //Atributo o parametro de la clase
  contador:number=0;
  //acciones o metodos de la clase
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
