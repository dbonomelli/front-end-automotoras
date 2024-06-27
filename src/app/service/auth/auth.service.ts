import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[] = [
    {email: "a", name: "Alien", password: "1"},
    {email: "b@b.cl", name: "Barco", password: "1234"}
  ]
  private session = new BehaviorSubject<string | null>(sessionStorage.getItem('username'));
  loggedIn?: boolean;
  constructor() { 
  }


  register(user:User){
    this.users.push(user)
  }

  login(email:string, password:string){
    this.users.find((x) => {
      if(x.email == email && x.password == password){
        sessionStorage.setItem('username', email)
        this.session.next(email);
        this.loggedIn = true;
      }
    })
  }

  getSession(){
    return this.session.asObservable();
  }

  logout(){
    sessionStorage.removeItem('username');
    this.session.next(null);
    this.loggedIn = false;
  }

  getLoggedIn(){
    return this.loggedIn;
  }

}
