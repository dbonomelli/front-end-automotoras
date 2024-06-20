import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[] = [
    {email: "a@a.cl", password: "1234"},
    {email: "b@b.cl", password: "1234"}
  ]

  constructor() { }


  register(user:User){
    this.users.push(user)
  }

  login(email:string, password:string){
    this.users.find((x) => {
      if(x.email == email && x.password == password){
        sessionStorage.setItem('username', email)
      }
    })
  }

  logout(){
    if(sessionStorage.getItem('username')){
      sessionStorage.removeItem('username');
    }
  }

}
