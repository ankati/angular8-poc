import { Injectable } from '@angular/core';
import { BPClient } from 'blocking-proxy';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  currentComponent: object;
  unsaved: boolean;
  constructor() { }
  setCurrentComponent(currentComponent: object) {
    this.currentComponent = currentComponent;
  }
  getCurrentComponent() {
    return this.currentComponent;
  }
  setUnsaved(unsaved: boolean) {
    this.unsaved = unsaved;
  }
  getUnsaved() {
    return this.unsaved;
  }
}
