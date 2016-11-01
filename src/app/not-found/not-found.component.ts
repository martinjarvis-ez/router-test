import { Component, ComponentFactoryResolver } from '@angular/core';
import {ControlComponent} from '../control-component';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent extends ControlComponent {

  constructor() {
      super();
    }
}
