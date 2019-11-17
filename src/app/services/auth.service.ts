import { StorageService } from './storage.service';
import { CredenciaisDTO } from './../model/credenciais.dto';
import { API_CONFIG } from './../config/api.config';
import { LocalUser } from './../model/localUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


const helper = new JwtHelperService();

//representa um servico de autenticacao na aplicacao.
@Injectable()
export class AuthService{

    //construtor da classe
    constructor(public http: HttpClient,public storage: StorageService){}

    //metodo responsavel por autenticar um usuario no sistema
    autenticar(creds: CredenciaisDTO){
        //realiza a chamada do metodo login via POST.
         return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe : 'response',
                responseType: 'text' //o login retora uma resposta de corpo vazio
            });
    }

    //responsavel por atualizar o token de segurança
    refreshToken(){
        //realiza a chamada do metodo refresh via POST.
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe : 'response',
                responseType: 'text' //o login retora uma resposta de corpo vazio
            });
    }

    //Representa um metodo de sucesso de login
    sucessoLogin(authorizationValue : string){

        console.log(authorizationValue);
        let tok = authorizationValue.substring(7); // retira o prefixo
        let user : LocalUser = {
            token: tok,
            login: helper.decodeToken(tok) 
        }
        this.storage.setLocalUser(user);  //armazena o usuario.
        console.log("a=   " + this.storage.getLocalUser());
    }

    logout(){
        this.storage.setLocalUser(null);//remove o usuario local.
    }
}