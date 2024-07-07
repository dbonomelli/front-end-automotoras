import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CurrencyPipe, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() source?:any[];
  @Input() displayedColumns?:string[];
  dataArray: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  
  ngOnChanges(): void {
    this.dataArray.data = this.source || [];
  }

  goToProfile(id: any){
    console.log(id);
  }

  goToCar(id: any){
    console.log(id);
  }

}
