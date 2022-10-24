import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilCuentaPage } from './perfil-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCuentaPageRoutingModule {}
