import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilTerminosPage } from './perfil-terminos.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTerminosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilTerminosPageRoutingModule {}
