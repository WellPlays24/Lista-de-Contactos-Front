import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private contactos: Contacto[] = [
    { id: 1, nombre: 'Juan Pérez', telefono: '0999999999', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana Gómez', telefono: '0988888888', email: 'ana@example.com' },
    { id: 3, nombre: 'Carlos López', telefono: '0977777777', email: 'carlos@example.com' },
    { id: 4, nombre: 'María Díaz', telefono: '0966666666', email: 'maria@example.com' },
    { id: 5, nombre: 'Luis Fernández', telefono: '0955555555', email: 'luis@example.com' },
  ];



  
  getContactos(): Contacto[] {
    return this.contactos;
  }

  getContacto(id: number): Contacto | undefined {
    return this.contactos.find(c => c.id === id);
  }

  nuevoContacto(contacto: Contacto): boolean {
    if (this.contactos.some(c => c.id === contacto.id)) {
      return false; // Ya existe contacto con ese id
    }
    this.contactos.push(contacto);
    return true;
  }
}
