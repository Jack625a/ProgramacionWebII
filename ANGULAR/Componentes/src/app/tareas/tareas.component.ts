import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea{
  nombre:string;
  completada:boolean;
}

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
    nuevaTarea: string='';
    tareas:Tarea[]=[];

    //METODOS O ACCIONES DE LA CLASE -- (AGREGAR TAREAS, COMPLETAR TAREA, ELIMINAR TAREA)
    agregarTarea(){
      if(this.nuevaTarea.trim()!==''){
        this.tareas.push({nombre: this.nuevaTarea, completada:false});
        this.nuevaTarea='';
      }
    }

    completarTarea(id:number){
      this.tareas[id].completada=!this.tareas[id].completada;
    }

    eliminarTarea(id:number){
      this.tareas.splice(id,1);
    }
}
