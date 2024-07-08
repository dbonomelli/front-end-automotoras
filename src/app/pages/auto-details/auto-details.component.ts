import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AutoService } from '../../service/autoService/auto.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  
  constructor(private activatedRouter:ActivatedRoute, private autoService:AutoService, private router:Router,){}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        
        this.autoId = params['id'];
        
        this.auto = this.autoService.getAutoById(this.autoId);
      }
    );
  }
  back(){
    this.router.navigate(['/ventas']);
  }
}
