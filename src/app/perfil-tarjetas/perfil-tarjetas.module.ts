import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilTarjetasPageRoutingModule } from './perfil-tarjetas-routing.module';

import { PerfilTarjetasPage } from './perfil-tarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilTarjetasPageRoutingModule
  ],
  declarations: [PerfilTarjetasPage]
})
export class PerfilTarjetasPageModule {}
