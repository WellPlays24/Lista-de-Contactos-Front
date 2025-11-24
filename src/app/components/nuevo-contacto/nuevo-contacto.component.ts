import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css'],
})
export class NuevoContactoComponent {
  contacto: Contacto = {
    id: 0,
    nombre: '',
    telefono: '',
    email: '',
  };

  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private contactoService: ContactoService, private router: Router) {}

  agregarContacto(form: NgForm) {
    this.mensajeError = '';
    this.mensajeExito = '';

    if (form.valid) {
      const agregado = this.contactoService.nuevoContacto(this.contacto);
      if (agregado) {
        this.mensajeExito = 'Contacto agregado exitosamente.';
        setTimeout(() => this.router.navigate(['/contactos']), 1500);
      } else {
        this.mensajeError = 'Error: El ID del contacto ya existe.';
      }
    } else {
      this.mensajeError = 'Por favor, complete correctamente el formulario.';
    }
  }
}
