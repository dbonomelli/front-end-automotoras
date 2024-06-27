import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[] = [
    {email: "a", password: "1"},
    {email: "b@b.cl", password: "1234"}
  ]

  private session = new BehaviorSubject<string | null>(null);

  constructor() { }


  register(user:User){
    this.users.push(user)
  }

  login(email:string, password:string){
    this.users.find((x) => {
      if(x.email == email && x.password == password){
        sessionStorage.setItem('username', email)
        this.session.next(email);
      }
    })
  }

  getSession(){
    return this.session.asObservable();
  }

  logout(){
    sessionStorage.removeItem('username');
    this.session.next(null);
  }

}
