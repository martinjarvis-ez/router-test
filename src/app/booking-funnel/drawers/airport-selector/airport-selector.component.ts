import { Component, AfterViewInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DrawerView } from '../../../core/index';
import { Airport, Country, AirportsResult } from '../../models/index';


@Component({
  selector: 'airport-selector-drawer',
  templateUrl: './airport-selector.component.html',
  styleUrls: ['./airport-selector.component.scss']
})
export class AirportSelectorDrawerComponent extends DrawerView implements AfterViewInit {

  @Input() counterpart: string;
  @Input() existingSelection: string;
  selectedAirport = new Subject();

  constructor() { super(); }

  ngAfterViewInit() {
    setTimeout(() => this.show());
  }

  selected(selected: Airport) {
    this.selectedAirport.next(selected);
    this.close();
  }

}
