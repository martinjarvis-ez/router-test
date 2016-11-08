import { Component, ElementRef, ViewContainerRef} from '@angular/core';
import { Control } from '../models/control';
import { ControlComponent } from './control.component';

export class RootControlComponent extends ControlComponent {

  isEditing:boolean;

  constructor(private elm: ElementRef) {
    super();
    if (elm && elm.nativeElement) { // this can't be run outside of the browser - TODO: find better alternative
      this.control = JSON.parse(elm.nativeElement.getAttribute('control')) as Control;
      this.isEditing = elm.nativeElement.hasAttribute('isEditing');
    }
  }

  restoreProtectedPlaceholder(placeholderName:string, container: ViewContainerRef ){
      // must execute within a browser!
      let placeholderAttribute = `placeholder-${placeholderName}`;
      if (!this.elm.nativeElement.hasAttribute(placeholderAttribute)) {
        return;
      }
      let protectedPhId:string = this.elm.nativeElement.getAttribute(placeholderAttribute);
      let source: any = this.elm.nativeElement.ownerDocument.getElementById(protectedPhId);
      container.element.nativeElement.appendChild(source);
      /*let children: any[] = source.childNodes;
      if (children && children.length > 0) {
        for (let c of children) {
          container.element.nativeElement.appendChild(c);
        }
      }*/
  }

}
