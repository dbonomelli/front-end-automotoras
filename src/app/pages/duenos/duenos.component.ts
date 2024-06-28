import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from '../../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-duenos',
  standalone: true,
  imports: [MatCardModule, TableComponent, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './duenos.component.html',
  styleUrl: './duenos.component.scss'
})
export class DuenosComponent implements OnInit{
  constructor(private authService: AuthService){}
  displayedColumns: string[] = ['name', 'id'];
  users:User[];

  ngOnInit(): void {
    this.users = this.authService.getUsers();
  }
}
