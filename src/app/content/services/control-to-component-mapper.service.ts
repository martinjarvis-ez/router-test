import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { Layout, Control, Placeholder } from 'core/models/control';
import { ControlComponent } from 'core/components/control.component';
import { FactoryMapService } from 'content/services/factory-map.service';

@Injectable()
export class ControlToComponentMapperService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private factoryMap: FactoryMapService) {

  }

  getComponentFromPath(path: string): any {
    let found = this.factoryMap.map[path];
    if (found) {
      return found;
    }
    return NotFoundComponent;
  }

  createPlaceholderControls(template: ViewContainerRef, placeholders: Placeholder[], placeholder: string): ComponentRef<any>[] {
    let refs: ComponentRef<any>[] = [];
    if (placeholders) {
      let contentControls = placeholders.filter((ph: Placeholder) => ph.name === placeholder)[0];
      if (contentControls && contentControls.controls) {
        let controls = contentControls.controls || [];
        for (let ctrl of controls) {
          let component: any = this.getComponentFromPath(ctrl.path);
          let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
          let componentRef = template.createComponent(componentFactory) as ComponentRef<ControlComponent>;
          componentRef.instance.control = ctrl;
          refs.push(componentRef);
        }
      }
    }
    return refs;
  }

  setLayout(template: ViewContainerRef, layout: Layout): ComponentRef<any>[] {
    let refs: ComponentRef<any>[] = [];
    let component: any = this.getComponentFromPath(layout.path);
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    let componentRef = template.createComponent(componentFactory);
    refs.push(componentRef);
    return refs;
  }
}
