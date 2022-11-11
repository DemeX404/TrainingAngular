import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";


@Injectable()
export class empleadosService {

    constructor(private servicioVentanaEmergent: ServicioEmpleadosService, private dataService: DataServices){}

    setEmpleados(misEmpleados:Array<Empleado>){
        this.empleados = misEmpleados
    }

    obtenerEmpleados(){
        return this.dataService.cargarEmpleados();
    }

    empleados: Array<Empleado> = [];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergent.muestraMensaje("Persona que se va a agregar: " + " \n" + 
        empleado.nombre + "\n" + "Salario: "+ empleado.salario) 
        this.empleados.push(empleado)
        this.dataService.guardarEmpleados(this.empleados)

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

        this.dataService.actualizarEmpleado(indice, empleado)
    }

    eliminarEmpleado(indice:number){
        this.empleados.splice(indice, 1)
        this.dataService.eliminarEmpleado(indice)

        if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados)
    }
}