import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEscribenosPage } from './perfil-escribenos.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEscribenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEscribenosPageRoutingModule {}
