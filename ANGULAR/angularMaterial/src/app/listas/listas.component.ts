import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [MatListModule,CommonModule,MatIconModule],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent {
  colores=["Rojo","Verde","Azul","Amarillo","Cafe","Negro","Rosado"];
}
