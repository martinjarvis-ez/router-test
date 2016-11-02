import { Component, AfterViewInit, ViewChild, ViewContainerRef, Injector, OnInit} from '@angular/core';
import { ControlToComponentMapperService  } from '../control-to-component-mapper.service';
import { CurrentContentService } from '../current-content.service';

@Component({
  selector: 'master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements AfterViewInit, OnInit   {


  @ViewChild('header', {read: ViewContainerRef}) header : ViewContainerRef;
  @ViewChild('main', {read: ViewContainerRef}) main : ViewContainerRef;
  @ViewChild('footer', {read: ViewContainerRef}) footer : ViewContainerRef;
  @ViewChild('basket', {read: ViewContainerRef}) basket : ViewContainerRef;

  private mapper: ControlToComponentMapperService;
  constructor(private injector: Injector, private current: CurrentContentService) {

  }

 ngOnInit(){
   this.mapper = this.injector.get(ControlToComponentMapperService);
 }

  ngAfterViewInit() {
    setTimeout(()=> this.mapper.createPlaceholderControls(this.header, this.current.placeholders, "header"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.main, this.current.placeholders, "main"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.footer, this.current.placeholders, "footer"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.basket, this.current.placeholders, "basket"));
  }
}
