import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { data } from '../../service/MOCK_DATA';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  myDataArray = data;
  displayedColumns: string[] = ['id', 'vehiculo', 'patente', 'duenos', 'color', 'ano', 'marca'];
}
