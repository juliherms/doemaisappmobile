import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage} from '@ionic/storage';

/**
 * j.a.vasconcelos
 * This class responsible authorize and authenticate access
 */
@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate  {

  constructor(private storage: Storage,private router: Router){}

  // Implementa uma verificacao na navegacao.
  async canActivate(): Promise<boolean>{
    //verifica se o usuario ja visualizou o tutorial
    const hasSeen = await this.storage.get('tutorialSeen');

    if(true){ //juliherms - verificar
      this.router.navigateByUrl('/login');
    }
    return hasSeen;
  }
}
