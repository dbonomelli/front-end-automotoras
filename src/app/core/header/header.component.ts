import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription? : Subscription;
  loginButton: boolean = true;
  username?: string = '';

  constructor(private authService: AuthService, private router:Router){
  }
  
  ngOnInit(): void {
    this.subscription = this.authService.getSession().pipe(
      tap((email) => {
        if(email != null){
          this.loginButton = false;
        }else{
          this.loginButton = true;
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
