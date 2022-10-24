import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilTarjetasPage } from './perfil-tarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilTarjetasPageRoutingModule {}
