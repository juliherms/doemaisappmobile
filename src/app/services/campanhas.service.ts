import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_CONFIG } from './../config/api.config';

/**
 * Representa um servico de campanhas
 */
@Injectable({
  providedIn: 'root'
})
export class CampanhasService {

  constructor(private http: HttpClient) { }


  //lista todas as campanhas cadastradas no sistema por ong informada
  getAllPaginadoByOng(idOng: string,pagina:number,linhas:number){

    console.log(`${API_CONFIG.baseUrl}/campanhas/paginadoPorOng?idOng=${idOng}&page=${pagina}&count=${linhas}`);

    return this.http.get(`${API_CONFIG.baseUrl}/campanhas/paginadoPorOng?idOng=${idOng}&page=${pagina}&count=${linhas}`).pipe(map(res => res['data']['content']));
  }

  //lista todas as campanhas cadastradas de forma paginada
  getAllPaginado(pagina:number,linhas:number){
    console.log(`${API_CONFIG.baseUrl}/campanhas/paginado?page=${pagina}&count=${linhas}`);

    return this.http.get(`${API_CONFIG.baseUrl}/campanhas/paginado?page=${pagina}&count=${linhas}`).pipe(map(res => res['data']['content']));
  }
  
}
