import { Component} from '@angular/core';
import { Control, DataSource } from './control';
import { CommonControlComponent } from './common-control-component';

export class ControlComponent extends CommonControlComponent {

  control: Control;

  field(fieldName: string) {
    if (this.control && this.control.dataSources) {
      for (let ds of this.control.dataSources) {
        for (let f of ds.fields) {
          if (f.name === fieldName) {
            return f.value;
          }
        }
      }
    }
    return '';
  }
}
