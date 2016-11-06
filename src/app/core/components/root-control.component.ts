import { Component, ElementRef} from '@angular/core';
import { Control } from '../models/control';
import { ControlComponent } from './control.component';

export class RootControlComponent extends ControlComponent {

  isEditing:boolean;

  constructor(elm: ElementRef) {
    super();
    if (elm && elm.nativeElement) { // this can't be run outside of the browser - TODO: find better alternative
      this.control = JSON.parse(elm.nativeElement.getAttribute('control')) as Control;
      this.isEditing = elm.nativeElement.hasAttribute('isEditing');
    }
  }

}
