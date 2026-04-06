import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Riesgo } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class RiesgosService {

  private apiUrl = 'http://localhost:3000/riesgos';

  constructor(private http: HttpClient) {

  }

  getRiesgos(): Observable<Riesgo[]> {

    return this.http.get<Riesgo[]>(this.apiUrl)

  }

  getRiesgo(id: number): Observable<Riesgo> {

    return this.http.get<Riesgo>(`${this.apiUrl}/${id}`);
  }

  postRiesgo(riesgo: Riesgo): Observable<Riesgo> {

    return this.http.post<Riesgo>(this.apiUrl, riesgo)

  }

  updateRiesgo(id: number, riesgo: Partial<Riesgo>): Observable<Riesgo> {

    return this.http.patch<Riesgo>(`${this.apiUrl}/${id}`, riesgo)

  }

  deleteRiesgo(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`)

  }

  getRiesgosByCategoria(categoria: string): Observable<Riesgo[]> {
    return this.http.get<Riesgo[]>(`${this.apiUrl}/categoria/${categoria}`);
  }

}
