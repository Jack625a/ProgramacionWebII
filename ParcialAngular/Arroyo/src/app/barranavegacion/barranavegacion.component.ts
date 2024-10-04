import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  imports: [MatTabsModule,MatButtonModule,MatInputModule,MatIconModule],
  templateUrl: './barranavegacion.component.html',
  styleUrl: './barranavegacion.component.css'
})
export class BarranavegacionComponent {

}
