import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/mi_api/api.php'; // URL de la API

  constructor(private http: HttpClient) {}

  obtenerProductoAleatorio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

