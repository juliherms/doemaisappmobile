import { STORAGE_KEYS } from './../config/storage_keys.config';
import { LocalUser } from './../model/localUser';
import { Injectable } from '@angular/core';

//Representa uma classe de armazenamento de dados locais
@Injectable()
export class StorageService{

    //metodo responsavel por recuperar o usuario local
    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    //metodo responsavel por armazenar o usuario local
    setLocalUser(obj: LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj));
        }
    }
}