import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  tareas: string[] = [];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}