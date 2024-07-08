import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[] = [
    {email: "a", name: "Alien", region: "Metropolitana", contacto: "+56911111111", password: "1", id: "asd"},
    {email: "b@b.cl", name: "Barco", region: "Valparaíso", contacto: "+56922222222", password: "1234", id: "dsa"}
  ]
  private session = new BehaviorSubject<string | null>(sessionStorage.getItem('username'));
  loggedIn?: boolean;
  constructor() { 
    if(this.session.value != null){
      this.loggedIn = true;
    }

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

  getUsers(){
    let users:any = this.users.map(x => {return {name: x.name, id: x.id}});
    return users;
  }

  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }

}
