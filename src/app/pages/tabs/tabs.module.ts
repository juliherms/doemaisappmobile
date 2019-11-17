import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'}, //a rota vai para a pagina de home por default
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' }, //carrega a pagina principal
      { path: 'news', loadChildren: '../news/news.module#NewsPageModule' }, //carrega a pagina new
      //{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' }, //carrega o menu
      { path: 'ongs/details', loadChildren: '../ongs-item/ongs-item.module#OngsItemPageModule' } //carrega a tela de detalhe da ong
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
