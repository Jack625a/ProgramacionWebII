import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-datos2',
  standalone: true,
  imports: [],
  templateUrl: './datos2.component.html',
  styleUrl: './datos2.component.css'
})
export class Datos2Component {
  @Input() nombre: string='';
  @Input() precio: number=0;
  @Input() imagenUrl: string='';
  @Input() descripcion: string='';
}
