import { LocalUser } from './../../model/localUser';
import { StorageService } from './../../services/storage.service';
import { DoacoesService } from './../../services/doacoes.service';
import { OngsService } from './../../services/ongs.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  slidesOpts = {
    slidesPerView: 4.5,
    freeMode: true
  }

  ongs = []; //lista de ong a ser exibida

  valorDoado: number;
  

  localUser : LocalUser; // captura o usuario logado
  
  constructor(private ongService: OngsService, // service de api da ong
              private loadingCtrl: LoadingController,
              private doacaoService: DoacoesService,
              private storageService: StorageService, //service de storage
              private router: Router // classe de loading
              ) 
  {

  }

  //método chamado na entrada da tela.
  ngOnInit() {
    this.loadData();
  }

  //metodo responsavel por carregar as ongs
  async loadData() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 
    this.localUser = this.storageService.getLocalUser();

    let login = this.localUser.login.sub.toString();

    this.doacaoService.getValorTotalDoado(login).subscribe( res =>{
      this.valorDoado = res;
    })

    this.ongService.getAll().subscribe( res => {
      loading.dismiss();
      this.ongs = res;
    });
  }

  //redireciona a visualizacao de ong para outra pagina
  visualizarOng(o){
  
    let navigationExtras: NavigationExtras = {
      state:{
        ong: o
      }
    };

    this.router.navigate(['app/ongs/details'], navigationExtras);
  }
}
