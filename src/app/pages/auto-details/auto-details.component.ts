import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AutoService } from '../../service/autoService/auto.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-auto-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './auto-details.component.html',
  styleUrl: './auto-details.component.scss'
})
export class AutoDetailsComponent implements OnInit {
  autoId: any;
  auto: any;
  dueno: any;
  
  constructor(private activatedRouter:ActivatedRoute, private autoService:AutoService, private router:Router, private authService: AuthService){}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        
        this.autoId = params['id'];
        
        this.auto = this.autoService.getAutoById(this.autoId);

        this.dueno = this.authService.getUserById(this.auto.dueno);

        console.log(this.dueno)
      }
    );
  }
  back(){
    this.router.navigate(['/ventas']);
  }
}
