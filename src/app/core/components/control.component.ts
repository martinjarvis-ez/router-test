import { Component, Input} from '@angular/core';
import { Control, DataSource } from '../models/control';
import { CommonControlComponent } from './common-control.component';

export class ControlComponent extends CommonControlComponent {

  control: Control;

}
