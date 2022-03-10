import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  ListaDeTareas:Tarea[] = [];
  nombreTarea = ''
  constructor() { }

  ngOnInit(): void {
  }
  
  agregarTareas(){
    //crear un objeto tarea
    const tareas:Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };
    //agreagr el objeto tarea al array
    if(this.nombreTarea != '' ) {
    this.ListaDeTareas.push(tareas);
    }
    //reset forms 
    this.nombreTarea='';
  }

  eliminarTareas(index: number): void {
    this.ListaDeTareas.splice(index,1);
  }
  actualizarTarea(tarea:Tarea, index: number): void {
    this.ListaDeTareas[index].estado = !tarea.estado
  }
}
