import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
