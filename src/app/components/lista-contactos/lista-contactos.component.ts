import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-lista-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  contactos: Contacto[] = [];
  filtroNombre: string = '';

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.contactos = this.contactoService.getContactos();
  }

  get contactosFiltrados(): Contacto[] {
    if (!this.filtroNombre.trim()) {
      return this.contactos;
    }
    return this.contactos.filter(c =>
      c.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }
}
