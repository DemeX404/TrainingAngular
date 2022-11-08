import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { empleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:empleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados
  }

  empleados: Array<Empleado> = [
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Ana", "Martin", "Directora", 750),
    new Empleado("Maria", "Fdez", "Jefa de seccion", 7521),
    new Empleado("Laura", "Lopez", "Administrativo", 2500)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
     this.empleados.push(miEmpleado)
  }

}
