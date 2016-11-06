import { Directive, ElementRef, Input, Renderer, ViewContainerRef, Component} from '@angular/core';
import { Control } from '../models/control';
import { DynamicTypeBuilderService } from '../services/dynamic-type-builder.service'

@Directive({
  selector: '[field]'
})
export class FieldDirective {

  private _defaultValue: string;
  @Input() set defaultValue(value: string) {
    this._defaultValue = value;
  }

  private _isEditing: boolean;

  @Input() set isEditing(isEditing: boolean) {
    this._isEditing = isEditing;
  }

  private _fieldName: string;
  @Input('field') set fieldName(name: string) {
    this._fieldName = name;
    this.update();
  }

  private _data: Control;
  @Input() set control(data: Control) {
    if (typeof data === "string") {
      data = JSON.parse(data) as Control;
    }
    this._data = data;
    this.update();
  }

  constructor(private el: ElementRef, private renderer: Renderer, private viewContainerRef: ViewContainerRef, private builder: DynamicTypeBuilderService) {
  }

  private update() {
    if (this._data && this._fieldName) {
      let value = FieldDirective.getFieldValue(this._data, this._fieldName);
      if (this._isEditing && value.startsWith('#')) {
        // this way lies direct dom manipulation to move the editor elements child nodes to the current node
        let elm: any = this.el.nativeElement;
        let source: any = elm.ownerDocument.getElementById(value.substr(1))
        if (source && source.childElementCount > 0) {
          let children: any[] = source.childNodes;
          if (children && children.length > 0) {
            for (let c of children) {
              elm.appendChild(c);
            }
            source.parentNode.removeChild(source);
          }
        }
        return;
      }
      // should be safe to run everywhere!
      FieldDirective.addDynamicContent(this.viewContainerRef, this.builder, value || this._defaultValue);

    }
  }

  private static addDynamicContent(vcRef: ViewContainerRef, builder: DynamicTypeBuilderService, template: string) {

    builder.createComponentFactory(template)
      .then(factory => {
        vcRef.clear();
        vcRef.createComponent(factory);
      });
  }

  private static getFieldValue(data: Control, fieldName: string): string {
    if (data && data.dataSources) {
      for (let ds of data.dataSources) {
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
