import { Component, Input, Pipe } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Auto } from '../../model/auto';
import { AutoService } from '../../service/autoService/auto.service';
import { DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, RouterLink, DecimalPipe, MatIconModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() auto:Auto;

  constructor(private autoService:AutoService){

  }
  
}
