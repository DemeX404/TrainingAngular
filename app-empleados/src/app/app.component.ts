import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC5NCpFZiJNHaF_cs3BNi6jwjqLXY-ZpFc",
      authDomain: "mis-clientes-eeea5.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout()
{
  this.loginService.logout();
}
}
