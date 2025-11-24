import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-detalle-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.css']
})
export class DetalleContactoComponent implements OnInit {
  contacto: Contacto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactoService: ContactoService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (isNaN(id)) {
      this.router.navigate(['/contactos']);
      return;
    }

    this.contacto = this.contactoService.getContacto(id);

    if (!this.contacto) {
      this.router.navigate(['/contactos']);
    }
  }
}
