import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component'; // Importar el nuevo componente
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BienvenidaComponent,NavegacionComponent,ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimerProyecto';
}
