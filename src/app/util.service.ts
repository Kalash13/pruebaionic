import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isMenuEnabled = new Subject<boolean>();

  constructor() { }

  // Creación de un método para manejar el estado del menú lateral (habilitado o deshabilitado)
  setMenuState(enabled) {
    this.isMenuEnabled.next(enabled);
  }

  // Método para obtener el estado del menú
  getMenuState(): Subject<boolean> {
    return this.isMenuEnabled;
  }
}