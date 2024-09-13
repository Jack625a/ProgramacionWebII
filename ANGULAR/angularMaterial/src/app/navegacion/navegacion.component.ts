import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListasComponent } from '../listas/listas.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule,MatButtonModule,MatIconModule,ListasComponent,CardComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
