import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as cloneDeep from "lodash/cloneDeep";

import { SearchService } from '../../services/index';
import { SearchCriteria, Airport, Country, AirportsResult  } from '../../models/index';
import { AirportSelectorDrawerComponent, RecentSearchesDrawerComponent } from '../../drawers/index';
import { RootControlComponent, NavigationService, DrawerService } from '../../../core/index';

@Component({
  selector: 'search-pod',
  templateUrl: './search-pod.component.html',
  styleUrls: ['./search-pod.component.scss']
})
export class SearchPodComponent extends RootControlComponent implements OnInit, OnDestroy {

  model: SearchCriteria;
  private subs: Subscription[] = [];
  private drawerSubs: Subscription[] = [];
  private _recentSearches: SearchCriteria[] = [];

  constructor(private search: SearchService, elm: ElementRef, private nav: NavigationService,  private drawer: DrawerService) {
    super(elm);
    this.subs.push(this.drawer.close.subscribe(recent => {
      for (let sub of this.drawerSubs) {
        sub.unsubscribe();
      }
      this.drawerSubs = [];
    }));
  }

  ngOnInit() {
    this.model = new SearchCriteria();
    this.subs.push(this.search.RecentSearchStream.subscribe(recent => this._recentSearches = recent));
  }

  ngOnDestroy() {
    for (let sub of [...this.subs, ...this.drawerSubs]) {
      sub.unsubscribe();
    }
  }

  get recentSearches(): SearchCriteria[] {
    return this._recentSearches;
  }

  onSubmit() {
    let current = cloneDeep(this.model);
    this.search.performSearch(current);
    let nextStep = this.getFieldValue('Next Step');
    if (nextStep) {
      this.nav.navigate(nextStep);
    }
  }

  selectDeparture() {
    let selector = this.drawer.showDrawer(AirportSelectorDrawerComponent);
    selector.counterpart = this.model.ArrivalAirport;
    selector.existingSelection = this.model.DepartureAirport;
    this.drawerSubs.push(selector.selectedAirport.subscribe((selected: Airport) => {
      this.model.DepartureAirport = selected.Iata;
    }));
  }

  selectArrival() {
    let selector = this.drawer.showDrawer(AirportSelectorDrawerComponent);
    selector.counterpart = this.model.DepartureAirport;
    selector.existingSelection = this.model.ArrivalAirport;
    this.drawerSubs.push(selector.selectedAirport.subscribe((selected: Airport) => {
      this.model.ArrivalAirport = selected.Iata;
    }));
  }

  showRecent(){
    let selector = this.drawer.showDrawer(RecentSearchesDrawerComponent);
    this.drawerSubs.push(selector.selectedSearch.subscribe((selected: SearchCriteria) => {
      this.model = selected;
    }));
  }


}
