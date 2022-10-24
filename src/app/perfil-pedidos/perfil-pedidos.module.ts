import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPedidosPageRoutingModule } from './perfil-pedidos-routing.module';

import { PerfilPedidosPage } from './perfil-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPedidosPageRoutingModule
  ],
  declarations: [PerfilPedidosPage]
})
export class PerfilPedidosPageModule {}
