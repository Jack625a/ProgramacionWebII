import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Paso 1. importar el modulo de Botones
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListasComponent } from './listas/listas.component';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavegacionComponent } from './navegacion/navegacion.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatIconModule,
    ListasComponent,
    MatListModule,
    CommonModule,
    CardComponent,
    NavegacionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularMaterial';
}
