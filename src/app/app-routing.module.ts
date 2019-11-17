import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

/**
 * j.a.vasconcelos - routes responsible to navigation app
 */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // define login principal page
 // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {   path: 'login',loadChildren: './pages/login/login.module#LoginPageModule'//,
   //   canActivate: [TutorialGuard]
  },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule'}, //pagina de abas
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'ongs-item', loadChildren: './pages/ongs-item/ongs-item.module#OngsItemPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
