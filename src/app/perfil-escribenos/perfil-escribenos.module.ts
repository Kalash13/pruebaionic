import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEscribenosPageRoutingModule } from './perfil-escribenos-routing.module';

import { PerfilEscribenosPage } from './perfil-escribenos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEscribenosPageRoutingModule
  ],
  declarations: [PerfilEscribenosPage]
})
export class PerfilEscribenosPageModule {}
