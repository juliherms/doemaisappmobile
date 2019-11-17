import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_CONFIG } from './../config/api.config';

/**
 * Representa um servico de doacao
 */
@Injectable({
  providedIn: 'root'
})
export class DoacoesService {

  constructor(private http: HttpClient) { }

  //recupera o totla de valor doado por usuario informado
  getValorTotalDoado(login: string){
    
    console.log(`${API_CONFIG.baseUrl}/doacoes/totalValorPorLogin?login=${login}`);

    return this.http.get(`${API_CONFIG.baseUrl}/doacoes/totalValorPorLogin?login=${login}`).pipe(map(res => res['data']));
  }
}

