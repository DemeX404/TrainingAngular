import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  name="Juan"
  surname="Díaz"
  age =20;
  //company="Woxter"
  constructor() { }

  ngOnInit(): void {
  }

}
