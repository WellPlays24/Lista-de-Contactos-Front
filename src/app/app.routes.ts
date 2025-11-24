import { Routes } from '@angular/router';

import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { DetalleContactoComponent } from './components/detalle-contacto/detalle-contacto.component';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contactos', pathMatch: 'full' },
  { path: 'contactos', component: ListaContactosComponent },
  { path: 'contacto/:id', component: DetalleContactoComponent },
  { path: 'nuevo-contacto', component: NuevoContactoComponent },
  { path: '**', redirectTo: '/contactos' },
];
