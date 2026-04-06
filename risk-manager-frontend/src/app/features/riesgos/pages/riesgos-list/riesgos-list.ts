import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RiesgosService } from '../../services/riesgos';
import { Riesgo } from '../../../../models';

@Component({
  standalone: true,
  selector: 'app-riesgos-list',
  imports: [CommonModule],
  templateUrl: './riesgos-list.html',
  styleUrls: ['./riesgos-list.scss'],
})
export class RiesgosList implements OnInit {

  riesgos: Riesgo[] = []
  loading = true
  error = false

  constructor(private riesgosService: RiesgosService) {

  }

  ngOnInit(): void {
    this.loadRiesgos();
  }

  loadRiesgos(): void {

    this.loading = true
    this.error = false

    console.log("Cargando riesgos")

    this.riesgosService.getRiesgos().subscribe({
      next: (data) => {

        console.log("Riesgos recibidors", data)
        this.riesgos = data;
        this.loading = false
        console.log('✅ Loading ahora es:', this.loading);
        console.log('✅ this.riesgos tiene:', this.riesgos.length, 'elementos');
      },
      error: (err) => {
        this.error = true
        this.loading = false;
      }
    })

  }

  deleteRiesgo(id: number): void {
    if (confirm("Estas seguro de eliminar este riesgo?")) {
      this.riesgosService.deleteRiesgo(id).subscribe({
        next: () => {
          this.loadRiesgos();
        },
        error: (err) => {
          console.error("Error al eliminar", err)
          alert('Error al eliminar el riesgo')
        }
      })
    }
  }

}
