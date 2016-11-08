import {Component, ComponentFactory, NgModule, Input, Injectable} from '@angular/core';
import {RuntimeCompiler} from '@angular/compiler';
import * as find from "lodash/find";

// http://plnkr.co/edit/wh4VJG?p=preview
@Injectable()
export class DynamicTypeBuilderService {

  // we need Dynamic component builder
  constructor( protected compiler: RuntimeCompiler ) {}

  // this object is singleton - so we can use this as a cache
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<any>} = {};

  createComponentFactory(template: string) : Promise<ComponentFactory<any>> {

    let factory = this._cacheOfFactories[template];

    if (factory) {
        return new Promise((resolve) => {
            resolve(factory);
        });
    }

    // unknown template ... let's create a Type for it
    let type   = this.createNewComponent(template);
    let module = this.createComponentModule(type);

    return new Promise((resolve) => {
        this.compiler
            .compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories) =>
            {
                factory = find(moduleWithFactories.componentFactories, { componentType: type });

                this._cacheOfFactories[template] = factory;

                resolve(factory);
            });
    });
  }

  private createNewComponent(tmpl:string) {
      @Component({
          selector: 'dynamic-component',
          template: tmpl
      })
      class CustomDynamicComponent {
      };
      // a component for this particular template
      return CustomDynamicComponent;
  }
  private createComponentModule (componentType: any) {
      @NgModule({
        declarations: [
          componentType
        ]
      })
      class RuntimeComponentModule
      {
      }
      // a module for just this Type
      return RuntimeComponentModule;
  }
}
