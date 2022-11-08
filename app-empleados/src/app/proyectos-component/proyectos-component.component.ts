import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router: Router, private miServicio:ServicioEmpleadosService, private empleadosService:empleadosService) { }

  empleados: Array<Empleado> = [];

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados
  }

  volverHome() {
    this.router.navigate([''])
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate([''])
  }

}
