import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDireccionPage } from './perfil-direccion.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDireccionPageRoutingModule {}
