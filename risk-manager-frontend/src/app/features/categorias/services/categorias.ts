import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Categorias {

  private apiUrl = 'http://localhost:3000/categorias'; // ¿Cuál es la URL?

  constructor(private http: HttpClient) { // Aqui debo inicializar http client

  }

  getCategoria(): Observable<Categoria[]> {

    return this.http.get<Categoria[]>(this.apiUrl)

    // Basicamente se compone de un this.http es el metodo que se utilizara para hacer el llamado
    // get<Categorias[]> esta diciendo que del Objeto Categorias haga un get
    //() y dentro del parentesis va la variable que va a traer la informacion.

  }

  createCategoria(categoria: Categoria): Observable<Categoria> {

    return this.http.post<Categoria>(this.apiUrl, categoria)
    // Mi explicacion es la siguiente

    // lo mismo con el http solamente que ahora el post, pero el post debe mandar la informacion de categorias. asi que ademas de enviar la url, debo enviar el body po.

  }

  deleteCategoria(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`)

    // hace un delete, no espera nada que retorne, por lo tanto no mira hacia un objeto, sino que hace un void.
    // y concateno el apiurl con el id que quiero eliminar.

  }

}
