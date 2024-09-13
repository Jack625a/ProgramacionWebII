import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListasComponent } from '../listas/listas.component';
import { CardComponent } from '../card/card.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule,
    MatButtonModule,
    MatIconModule,
    ListasComponent,
    CardComponent,
    //AlertasComponent,
    MatDialog,
    CommonModule,
    
   
  ],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  constructor(public dialogo:MatDialog){}
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
}
