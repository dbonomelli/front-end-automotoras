import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Auto } from '../../model/auto';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataSource?:Auto[];
  dataArray: MatTableDataSource<Auto> = new MatTableDataSource<Auto>([]);
  
  ngOnChanges(): void {
    this.dataArray.data = this.dataSource || [];
  }

  displayedColumns: string[] = ['id', 'modelo', 'marca', 'anno', 'color', 'valor', 'centralizado', 'ac'];
}
