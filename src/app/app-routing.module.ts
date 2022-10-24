import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil-cuenta',
    loadChildren: () => import('./perfil-cuenta/perfil-cuenta.module').then( m => m.PerfilCuentaPageModule)
  },

  {
    path: 'perfil-terminos',
    loadChildren: () => import('./perfil-terminos/perfil-terminos.module').then( m => m.PerfilTerminosPageModule)
  },
  {
    path: 'perfil-pedidos',
    loadChildren: () => import('./perfil-pedidos/perfil-pedidos.module').then( m => m.PerfilPedidosPageModule)
  },
  {
    path: 'perfil-escribenos',
    loadChildren: () => import('./perfil-escribenos/perfil-escribenos.module').then( m => m.PerfilEscribenosPageModule)
  },
  {
    path: 'perfil-direccion',
    loadChildren: () => import('./perfil-direccion/perfil-direccion.module').then( m => m.PerfilDireccionPageModule)
  },
  {
    path: 'perfil-tarjetas',
    loadChildren: () => import('./perfil-tarjetas/perfil-tarjetas.module').then( m => m.PerfilTarjetasPageModule)
  },  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
