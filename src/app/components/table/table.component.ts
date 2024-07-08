import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { DuenosPerfilComponent } from '../../pages/duenos-perfil/duenos-perfil.component';

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

  constructor(private router: Router) { }

  goToProfile(id: any){
    this.router.navigate(['/vendedores', id]);
    console.log(id);
  }

  goToCar(id: any){
    console.log(id);
  }

}
