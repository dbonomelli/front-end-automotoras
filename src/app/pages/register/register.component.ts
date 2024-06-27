import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { User } from '../../model/user';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user?:User;
  email:string = '';
  password:string = '';
  password2:string='';
  name:string= '';

  constructor(private authService: AuthService, private router:Router){}


  register(){
    if(this.password != this.password2){
      alert("Contraseñas no coinciden, por favor vuelve a intentarlo")
    }else{
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.authService.register(this.user)
      this.router.navigate(['login'])
    }
  }


}
