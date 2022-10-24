import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilCuentaPageRoutingModule } from './perfil-cuenta-routing.module';

import { PerfilCuentaPage } from './perfil-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilCuentaPageRoutingModule
  ],
  declarations: [PerfilCuentaPage]
})
export class PerfilCuentaPageModule {}
