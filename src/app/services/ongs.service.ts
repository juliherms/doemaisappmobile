import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_CONFIG } from './../config/api.config';

//classe responsavel por capturar a lista de ongs
@Injectable({
  providedIn: 'root'
})
export class OngsService {


  constructor(private http: HttpClient) { }

  //lista todas as ogs cadastradas no sistema
  getAll(){
    return this.http.get(`${API_CONFIG.baseUrl}/ongs`).pipe(map(res => res['data']));
  }
}
