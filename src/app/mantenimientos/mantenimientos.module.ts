import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { FacultadComponent } from './pages/facultad/facultad.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { NotaComponent } from './pages/nota/nota.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SeccionComponent } from './pages/seccion/seccion.component';
import { SedeComponent } from './pages/sede/sede.component';
import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { FormsModule } from '@angular/forms';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { CrearUsuarioComponent } from './pages/Crear/crear.component';
import { MaterialModule } from '../material/material.module';
import { ContenedorComponent } from './pages/carrera/contenedor/contenedor.component';
import { FormularioComponent } from './pages/carrera/formulario/formulario.component';
import { TableroComponent } from './pages/carrera/tablero/tablero.component';


@NgModule({
  declarations: [
    PruebaComponent,
    AlumnoComponent,
    CarreraComponent,
    CursoComponent,
    ExamenComponent,
    FacultadComponent,
    MaestroComponent,
    NotaComponent,
    PerfilComponent,
    SeccionComponent,
    SedeComponent,
    CrearUsuarioComponent,
    FormularioComponent,
    TableroComponent,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MantenimientosModule { }
