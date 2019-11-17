import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Classe responsavel por gerenciar os servicos de usuario
 */

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  //Metodo resonsavel por salvar um usuario no sistema
  addUsuario(data) {

    console.log(data);

    return this.http.post(`${API_CONFIG.baseUrl}/usuarios`, data);
  }
}
