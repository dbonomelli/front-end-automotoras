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
  region:string = '';
  contacto:string = '';
  password:string = '';
  password2:string='';
  name:string= '';

  constructor(private authService: AuthService, private router:Router){}


  register(){
    if(this.password != this.password2){
      alert("Contraseñas no coinciden, por favor vuelve a intentarlo")
    }else{
      this.user = {
        id: this.generadorID(8),
        name: this.name,
        email: this.email,
        region: this.region,
        contacto: this.contacto,
        password: this.password
      }
      this.authService.register(this.user)
      this.router.navigate(['login'])
    }
  }

  generadorID(length: number) {
    let alfab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += alfab.charAt(Math.floor(Math.random() * alfab.length));
    }
    return result;
}


}
