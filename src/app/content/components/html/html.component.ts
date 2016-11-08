import { Component } from '@angular/core';
import {ControlComponent} from '../../../core/components/control.component';


var module:any;

@Component({
  moduleId: module.id,
  selector: 'html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent extends ControlComponent {

  constructor() { super() }

}
