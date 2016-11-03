import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonControlComponent } from 'core/components/common-control.component';
import { ControlToComponentMapperService  } from 'content/services/control-to-component-mapper.service';
import { CurrentContentService } from 'content/services/current-content.service';
import { Layout } from 'core/models/control';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent extends CommonControlComponent implements OnInit, AfterViewInit, OnDestroy {

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
    this.destroyReferences();
    this.layout = content;
    this.templateReference = this.controlMapper.setLayout(this.template, this.layout);
  }
}
