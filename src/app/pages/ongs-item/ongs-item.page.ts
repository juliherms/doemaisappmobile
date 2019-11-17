import { CampanhasService } from './../../services/campanhas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

/**
 * Pagina responsavel por exibir o detalhe de uma ONG
 */
@Component({
  selector: 'app-ongs-item',
  templateUrl: './ongs-item.page.html',
  styleUrls: ['./ongs-item.page.scss'],
})
export class OngsItemPage implements OnInit {

  ong = null; //Representa uma ong
  campanhas = []; //lista de campanhas das ongs

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loadingCtrl: LoadingController,
              private campanhaService: CampanhasService) {
  
    //captura a ong enviada como parametro
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ong = this.router.getCurrentNavigation().extras.state.ong;
        this.loadData();
      }
    });

  }

  ngOnInit() {
    this.campanhas = [];
    this.loadData();
  }

  //metodo responsavel por carregar as ongs
  async loadData() {

    let loading = await this.loadingCtrl.create();
    await loading.present();
    
    this.campanhaService.getAllPaginadoByOng(this.ong.id,0,10).subscribe( res => {
      loading.dismiss();
      this.campanhas = res;
    });
  }

}
