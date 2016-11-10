import { Component, AfterViewInit, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';
import { RootControlComponent } from '../../../core/components/root-control.component';
import { ControlToComponentMapperService  } from '../../services/control-to-component-mapper.service';
import { CurrentContentService } from '../../services/current-content.service';

var module:any;

@Component({
  moduleId: module.id,
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends RootControlComponent implements AfterViewInit {

  @ViewChild('banner', { read: ViewContainerRef }) banner: ViewContainerRef;

  constructor(private mapper: ControlToComponentMapperService, private current: CurrentContentService, elm: ElementRef) {
    super(elm);
  }

  ngAfterViewInit() {
    if (this.current.placeholders) {
      setTimeout(() => {
        this.mapper.createPlaceholderControls(this.banner, this.current.placeholders, this.placeholder + "/banner");
      });
    }
    else {
      this.restoreProtectedPlaceholder('banner', this.banner);
    }
  }
}
