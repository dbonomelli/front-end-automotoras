import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Auto } from '../../model/auto';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AutoService } from '../../service/autoService/auto.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, TableComponent, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  displayedColumns: string[] = ['modelo', 'marca', 'anno', 'color', 'valor', 'centralizado', 'ac', 'actions'];
  auto?:Auto[];

  constructor(private autoService:AutoService){}

  ngOnInit(): void {
    this.auto = this.autoService.get();
  }
}
