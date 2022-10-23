import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = 'qwe';
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:Array<{titulo:string}>;
  
  constructor(){
    this.entradas = [
      {titulo:"Python cada dia mas presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
    ]
  }
  registrarUsuario(){
    this.registrado = true
    this.mensaje="Usuairio registrado con exito"
  }
}
