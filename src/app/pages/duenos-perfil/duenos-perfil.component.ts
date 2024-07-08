import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-duenos-perfil',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './duenos-perfil.component.html',
  styleUrl: './duenos-perfil.component.scss'
})
export class DuenosPerfilComponent implements OnInit {
  userId: any;
  user: any;
  constructor(private activatedRouter:ActivatedRoute, private authService:AuthService, private router:Router,){}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.userId = params['id'];
        
        this.user = this.authService.getUserById(this.userId);
      }
    );
  }
  back(){
    this.router.navigate(['/vendedores']);
  }

}
