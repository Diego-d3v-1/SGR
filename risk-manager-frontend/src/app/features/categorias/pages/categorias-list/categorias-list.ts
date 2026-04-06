import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models';
import { Categorias } from '../../services/categorias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias-list',
  imports: [CommonModule],
  templateUrl: './categorias-list.html',
  styleUrl: './categorias-list.scss',
})
export class CategoriasList implements OnInit {

  categorias: Categoria[] = []
  loading = true
  error = false

  constructor(private categoriaService: Categorias){}

  ngOnInit(): void {
    this.loadCategorias();
    
  }

  loadCategorias(): void {
    this.loading = true;

    this.categoriaService.getCategoria().subscribe({
      next:(data) => {
        this.categorias = data;
        this.loading = false
        console.log("Llego la informacion", data)
      },
      error:(err) => {
        this.error = true
        this.loading = false
        console.log("Error")
      }
    })


  }


  deleteCategoria(id: number): void {
    if(confirm('Estas seguro que deseas eliminar?')){
      this.categoriaService.deleteCategoria(id).subscribe({
        next: () => {
          this.loadCategorias();
        },
        error: () => {
          console.log("Error")
          alert("Se ha producido un error al eliminar")
        }
      })
    }
  }


}
