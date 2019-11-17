import { Router } from '@angular/router';
import { CredenciaisDTO } from './../../model/credenciais.dto';
import { AuthService } from './../../services/auth.service';
import { LoadingController,NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //inicializa a variavel de login e senha.
  creds : CredenciaisDTO = {
    login: "",
    senha: ""
  };
  
  constructor(public navCtrl: NavController,
              private router: Router,
              public loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public auth: AuthService) {

  }

  ngOnInit() {}


  //método responsável por direcionar para a tela de cadastro
  cadastrar(){
    this.router.navigateByUrl("/cadastro");
  }

  //Método responsável por realizar o login na aplicacao.
  async logar(){

    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.auth.autenticar(this.creds).subscribe(response => {
      this.auth.sucessoLogin(response.headers.get('Authorization'));
      this.loadingCtrl.dismiss();
       //chama a pagina após o login
       this.router.navigateByUrl('/app');
    }, error => {
      console.log("juliherms, tratar erro");
      this.loadingCtrl.dismiss();
    }) 
  }

  //metodo responsavel por gerar o loading da aplicacao.
  //cria o load e retorna ele.
  presentLoading(){
    this.loadingCtrl.create({ 
      message: 'Aguarde...',
    }).then((res) => {
      res.present();
    });
  }

}
