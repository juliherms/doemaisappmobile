import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredenciaisDTO } from './../../model/credenciais.dto';
import { AuthService } from './../../services/auth.service';
import { LoadingController,NavController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variavel responsavel por controlar a exibicao da senha.
  exibirSenha = true; 
  //formulario de preenchimento do login e senha.
  formulario: FormGroup;

  //inicializa a variavel de login e senha.
  creds : CredenciaisDTO = {
    login: "",
    senha: ""
  };
  
  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private router: Router,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private alertCtrl: AlertController,
              public auth: AuthService) {

    //inicializa o formulario  
    this.formulario = this.fb.group({
      login:['',Validators.compose([
        Validators.required,
      ])],
      senha:['',Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])]
    });

  }

  ngOnInit() {}

  //metodo responsavel pelo controle da exibicao da senha
  controlarExibeSenha(){
    this.exibirSenha = !this.exibirSenha;
  }
  //método responsável por direcionar para a tela de cadastro
  cadastrar(){
    this.router.navigateByUrl("/cadastro");
  }

  //Método responsável por realizar o login na aplicacao.
  async logar(){

    let loading = await this.loadingCtrl.create({ message: 'Autenticando...'});
    await loading.present();

    let credencial = this.formulario.value;

    this.auth.autenticar(credencial).subscribe(response => {
      this.auth.sucessoLogin(response.headers.get('Authorization'));
      this.loadingCtrl.dismiss();
       //chama a pagina após o login
       this.router.navigateByUrl('/app');
    }, error => {
      this.showError("Erro ao realizar o login");
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

  //exibe uma mensagem de erro.
  async showError(mensagem){
    const error = await this.toastCtrl.create({ 
      message: mensagem,
      showCloseButton: true,
      closeButtonText: 'Fechar',
      duration: 3000});

    error.present();
  }

}
