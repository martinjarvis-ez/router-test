import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonControlComponent } from '../common-control-component';
import { ControlToComponentMapperService  } from '../control-to-component-mapper.service';
import { CurrentContentService } from '../current-content.service';
import { Layout } from '../control';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends CommonControlComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('template', { read: ViewContainerRef }) private template: ViewContainerRef;

  layout: Layout;
  private subscription: Subscription;
  constructor(private controlMapper: ControlToComponentMapperService, private route: ActivatedRoute, private currentContent: CurrentContentService) {
    super();
  }

  ngOnInit() {
    this.subscription = this.currentContent.Stream.subscribe(content => this.processUpdate(content));
    this.layout = this.route.snapshot.data['control'];
  }

  ngAfterViewInit() {
    this.templateReference = this.controlMapper.setLayout(this.template, this.layout);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.subscription.unsubscribe();
  }

  private processUpdate(content: Layout) {
    debugger;
    this.destroyReferences();
    this.layout = content;
    this.templateReference = this.controlMapper.setLayout(this.template, this.layout);
  }
}
