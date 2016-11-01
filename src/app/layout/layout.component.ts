import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonControlComponent } from '../common-control-component';
import { ControlToComponentMapperService  } from '../control-to-component-mapper.service';
import { CurrentContentService } from '../current-content.service';
import { Layout } from '../control';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends CommonControlComponent implements OnInit, AfterViewInit {

  @ViewChild('template', { read: ViewContainerRef }) private template: ViewContainerRef;

  layout: Layout;

  constructor(private controlMapper: ControlToComponentMapperService, private route: ActivatedRoute, private currentContent: CurrentContentService) {
    super();
  }

  ngOnInit() {
    this.layout = this.route.snapshot.data['control'];
    this.currentContent.layout = this.layout;
    this.currentContent.placeholders = this.layout.placeholders;

  }

  ngAfterViewInit() {
    this.templateReference = this.controlMapper.setLayout(this.template, this.layout);
  }
}
