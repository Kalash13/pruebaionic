import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPedidosPage } from './perfil-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPedidosPageRoutingModule {}
