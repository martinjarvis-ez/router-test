import { Component, Input} from '@angular/core';
import { Control, DataSource } from '../models/control';
import { FieldDirective} from '../directives/field.directive';
import { CommonControlComponent } from './common-control.component';

export class ControlComponent extends CommonControlComponent {

  control: Control;

  placeholder:string = '/';

  getFieldValue(fieldName: string): string {
    return FieldDirective.getFieldValue(this.control, fieldName);
  }

}
