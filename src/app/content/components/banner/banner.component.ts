import { Component, AfterViewInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ControlComponent} from 'core/components/control.component';
import { ControlToComponentMapperService  } from 'content/services/control-to-component-mapper.service';
import { CurrentContentService } from 'content/services/current-content.service';
@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends ControlComponent implements AfterViewInit {

  @ViewChild('banner', { read: ViewContainerRef }) banner: ViewContainerRef;

  constructor(private mapper: ControlToComponentMapperService, private current: CurrentContentService) {
    super();
  }

  ngAfterViewInit() {
    setTimeout(() => this.mapper.createPlaceholderControls(this.banner, this.current.placeholders, this.placeholder + "/banner"));
  }
}
