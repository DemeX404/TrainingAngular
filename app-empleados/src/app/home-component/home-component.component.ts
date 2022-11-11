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
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados =>{
      console.log(misEmpleados)
      this.empleados = Object.values(misEmpleados)
      this.empleadosService.setEmpleados(this.empleados)
    })
  }

  empleados: Array<Empleado> = [ ];

  cuadroNombre:string=""; 
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
  }

}
