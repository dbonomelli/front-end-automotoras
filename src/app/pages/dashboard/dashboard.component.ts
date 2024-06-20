import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Auto } from '../../model/auto';
import { AutoService } from '../../service/auto.service';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, TableComponent, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  auto?:Auto[];

  constructor(private autoService:AutoService){}

  ngOnInit(): void {
    this.auto = this.autoService.get();
  }
}
