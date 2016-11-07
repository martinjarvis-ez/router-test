import { Component, AfterViewInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ControlToComponentMapperService  } from '../../services/control-to-component-mapper.service';
import { CurrentContentService } from '../../services/current-content.service';

@Component({
  selector: 'master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements AfterViewInit   {


  @ViewChild('header', {read: ViewContainerRef}) header : ViewContainerRef;
  @ViewChild('main', {read: ViewContainerRef}) main : ViewContainerRef;
  @ViewChild('footer', {read: ViewContainerRef}) footer : ViewContainerRef;
  @ViewChild('basket', {read: ViewContainerRef}) basket : ViewContainerRef;

  constructor(private mapper: ControlToComponentMapperService, private current: CurrentContentService) {

  }

  ngAfterViewInit() {
    setTimeout(()=> this.mapper.createPlaceholderControls(this.header, this.current.placeholders, "header"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.main, this.current.placeholders, "main"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.footer, this.current.placeholders, "footer"));
    setTimeout(()=> this.mapper.createPlaceholderControls(this.basket, this.current.placeholders, "basket"));
  }
}
