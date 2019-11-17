import { CampanhasService } from './../../services/campanhas.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  campanhas = [];

  constructor(private router:Router,
             private loadingCtrl: LoadingController,
             private campanhasService: CampanhasService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.campanhasService.getAllPaginado(0,10).subscribe( res => {
      loading.dismiss();
      this.campanhas = res;
    });
  }

}
