import { Component, ComponentFactoryResolver } from '@angular/core';
import {ControlComponent} from '../../../core/components/control.component';

var module:any;

@Component({
  moduleId: module.id,
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent extends ControlComponent {

  constructor() {
      super();
    }
}
