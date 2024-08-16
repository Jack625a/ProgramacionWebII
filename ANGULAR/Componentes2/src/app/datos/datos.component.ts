import { Component, Input } from '@angular/core';
//Para la entradad de datos

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
@Input() nombre: string='';
@Input() precio: number=0;
@Input() imagenUrl: string='';
@Input() descripcion: string='';
}
