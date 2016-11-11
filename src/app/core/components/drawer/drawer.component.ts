import { Component, AfterViewInit, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';
import { CommonControlComponent } from '../common-control.component';
import { DrawerService } from '../../services/drawer.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent extends CommonControlComponent implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  private showSub: Subscription;
  private closeSub: Subscription;

  private _display: boolean = false;
  get display():boolean{
    return this._display;
  }

  set display(value:boolean){
    this._display=value;
    if (!value){
      this.drawerService.closeDrawer();
    }
  }
  constructor(private drawerService: DrawerService) {
    super();

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.drawerService.setViewContainer(this.content);
      this.showSub = this.drawerService.show.subscribe(() => this.display = true);
      this.closeSub = this.drawerService.close.subscribe(() => this.display = false);
    });
  }

  ngOnDestroy() {
    this.drawerService.closeDrawer();
    this.showSub.unsubscribe();
  }

}
