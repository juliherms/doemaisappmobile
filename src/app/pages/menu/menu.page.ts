import { Component, OnInit, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  
  ngOnInit() {
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
  }

}
