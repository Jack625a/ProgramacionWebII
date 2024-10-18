import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListasComponent } from '../listas/listas.component';
import { CardComponent } from '../card/card.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AlertaInferiorComponent } from '../alerta-inferior/alerta-inferior.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule,
    MatButtonModule,
    MatIconModule,
    ListasComponent,
    CardComponent,
    //AlertasComponent,
    MatDialogModule,
    CommonModule,
    AlertaInferiorComponent,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
    
   
  ],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  constructor(public dialogo:MatDialog){}
  private alertaInferior=inject(MatBottomSheet) //Inyector para la alerta inferior
 //funcion para mostrar la alerta
 mostrarAlerta():void{
  const alertaPantalla=this.dialogo.open(AlertasComponent, {
    width:'400px',
    data:{message:'Prueba de confirmacion'}
  });
  alertaPantalla.afterClosed().subscribe(resultado=>{
    console.log('Se cerro la alerta: ${resultado}');
    if(resultado==='ok'){
      console.log('Mensaje de Confirmacion');
    }
  });
 }
 //Metodo Para mostrar la alerta Inferior
 abrirAlertaInferior():void{
  this.alertaInferior.open(AlertaInferiorComponent);

 }
}
