import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTareas:string[] = [];
  nuevaTarea:string = '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea); // agregamos una nueva tarea con el service
    this.nuevaTarea = ''; // vaciamos el input
    this.listaTareas = this._tareasService.getTareas(); // traemos de nuevo todas las tareas para actualizar le info del oninit
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index); // elimina la tarea segun el indice que le estamos pasando
    this.listaTareas = this._tareasService.getTareas();// traemos de nuevo todas las tareas para actualizar le info del oninit
  }


}
 