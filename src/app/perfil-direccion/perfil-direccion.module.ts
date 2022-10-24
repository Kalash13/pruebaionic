import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDireccionPageRoutingModule } from './perfil-direccion-routing.module';

import { PerfilDireccionPage } from './perfil-direccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDireccionPageRoutingModule
  ],
  declarations: [PerfilDireccionPage]
})
export class PerfilDireccionPageModule {}
