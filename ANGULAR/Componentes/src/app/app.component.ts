import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { SitioWebComponent } from './sitio-web/sitio-web.component';
import { ContadorComponent } from './contador/contador.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PruebaComponent, Prueba2Component, SitioWebComponent,ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componentes';
}
