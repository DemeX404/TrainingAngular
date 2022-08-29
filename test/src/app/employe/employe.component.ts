import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  name="Juan"
  surname="Díaz"
  age = 20;
  company = "Google";

  propertySquare = false;
  propertyLog=false;
  textRegister = "Nobody is registered";

  getLogUsers(){
    this.propertyLog=false;
  }

  setRegisterUser(event:Event){
   // alert("User Registred");

   if((<HTMLInputElement>event.target).value=="yes"){
    this.textRegister = "User Registered"
   }else{
    this.textRegister = "User is not Registered"
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
