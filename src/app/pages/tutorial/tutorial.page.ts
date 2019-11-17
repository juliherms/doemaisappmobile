import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  //Responsável por capturar o componente em tela.
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {}

  //executa um next no slide
  next() {
    this.slides.slideNext();
  }

  //finaliza o slide e navega para a tela de login
  async finish() {
    await this.storage.set('tutorialSeen', true);
    this.router.navigateByUrl('/login');
  }
}
