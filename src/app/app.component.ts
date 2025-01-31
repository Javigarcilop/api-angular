import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  producto: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Llamamos al servicio para obtener el producto aleatorio
    this.apiService.obtenerProductoAleatorio().subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }
}
