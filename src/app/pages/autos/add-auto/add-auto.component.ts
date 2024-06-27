import { Component } from '@angular/core';
import { InputsComponent } from '../../../components/inputs/inputs.component';

@Component({
  selector: 'app-add-auto',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './add-auto.component.html',
  styleUrl: './add-auto.component.scss'
})
export class AddAutoComponent {
  action: string = "SAVE";
}
