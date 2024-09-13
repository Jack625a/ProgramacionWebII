import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css'
})
export class AlertasComponent {
  constructor(){}
}
