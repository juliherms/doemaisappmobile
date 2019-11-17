import { UsuariosService } from './../../services/usuarios.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Classe responsavel por representar um cadastro de usuario
 */
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuarioForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private usuarioService: UsuariosService,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {

    //Configura o formulario de cadastro
    this.usuarioForm = this.fb.group({
      login: ['',Validators.required],
      nome: ['',Validators.required],
      email:['',Validators.required],
      senha: ['',Validators.required],
      perfis: ['',Validators.required],
      dataCadastro : ['',Validators.required],
    });

    this.usuarioForm.controls['dataCadastro'].patchValue('20191116');

    console.log(this.usuarioForm);

  }

  //Metodo responsavel por salvar um usuario
  async salvar() {

    let loading = await this.loadingCtrl.create({
      message: 'Salvando...'
    });
    await loading.present();

    //obtem o usuario atraves dos campos do formulario.
    
    let usuario = this.usuarioForm.value;

    this.usuarioService.addUsuario(usuario).subscribe(res => {
      loading.dismiss();
      this.router.navigateByUrl('/login');
    }, async err => {
      loading.dismiss();

      let alert = await this.alertCtrl.create({
        header: 'Erro',
        message: 'Falha ao Cadastrar o usuario',
        buttons: ['OK']
      });
      alert.present();
    });
  }
}
