import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertaInferiorComponent } from '../alerta-inferior/alerta-inferior.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatButtonModule,AlertaInferiorComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
private alertaInferior=inject(MatBottomSheet) //Inyector para la alerta inferior
//Metodo Para mostrar la alerta Inferior
abrirAlertaInferior():void{
  this.alertaInferior.open(AlertaInferiorComponent);

 }
}
