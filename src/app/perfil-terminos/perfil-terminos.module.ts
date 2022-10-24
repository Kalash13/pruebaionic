import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilTerminosPageRoutingModule } from './perfil-terminos-routing.module';

import { PerfilTerminosPage } from './perfil-terminos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilTerminosPageRoutingModule
  ],
  declarations: [PerfilTerminosPage]
})
export class PerfilTerminosPageModule {}
