import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class empleadosService {

    constructor(private servicioVentanaEmergent: ServicioEmpleadosService){}

    empleados: Array<Empleado> = [
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Ana", "Martin", "Directora", 750),
        new Empleado("Maria", "Fdez", "Jefa de seccion", 7521),
        new Empleado("Laura", "Lopez", "Administrativo", 2500)
    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergent.muestraMensaje("Persona que se va a agregar: " + " \n" + 
        empleado.nombre + "\n" + "Salario: "+ empleado.salario) 
        this.empleados.push(empleado)
    }

    encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];
        return empleado
    }

    actualizaEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice];

        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
    }
}