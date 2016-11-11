import { Injectable, ComponentFactoryResolver, ComponentRef, ViewContainerRef, Type } from '@angular/core';
import { DrawerView } from '../components/drawer-view';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DrawerService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private _container: ViewContainerRef;
  private _refs: ComponentRef<DrawerView>[] = [];
  private _subscriptions: Subscription[] = [];
  show = new Subject<boolean>();
  close = new Subject<boolean>();

  setViewContainer(container: ViewContainerRef) {
    this._container = container;
  }

  closeDrawer() {

    let refsToRelease = this._refs;
    this._refs = [];
    let subs = this._subscriptions;
    this._subscriptions = [];
    setTimeout(() => this.destroyDrawerView(refsToRelease, subs), 300);
  }

  showDrawer<TDrawView extends DrawerView>(view: Type<TDrawView>): TDrawView {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(view);
    let componentRef = this._container.createComponent(componentFactory) as ComponentRef<TDrawView>;
    this._refs.push(componentRef);
    this._subscriptions.push(componentRef.instance.readyToDisplay.subscribe(() => this.show.next(true)));
    this._subscriptions.push(componentRef.instance.readyToClose.subscribe(() => this.close.next(true)));
    return componentRef.instance;
  }

  destroyDrawerView(refsToRelease: ComponentRef<DrawerView>[] = null, subsToRelease: Subscription[] = null) {
    if (refsToRelease == null) {
      refsToRelease = this._refs;
      this._refs = [];
    }
    if (subsToRelease == null) {
      subsToRelease = this._subscriptions;
      this._subscriptions = [];
    }
    if (subsToRelease) {
      for (let tr of subsToRelease) {
        tr.unsubscribe();
      }
    }
    if (refsToRelease) {
      for (let tr of refsToRelease) {
        let index = this._container.indexOf(tr.hostView);

        this._container.remove(index);

        tr.destroy();
      }
    }
  }

}
