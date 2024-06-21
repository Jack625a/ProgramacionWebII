import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NavegacionComponent } from './navegacion/navegacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BienvenidaComponent,NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimerProyecto';
}
