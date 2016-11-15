import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/index';
import { Subscription } from 'rxjs/Subscription';
import { SearchCriteria } from '../../models/index'

@Component({
  selector: 'search-criteria-debug',
  templateUrl: './search-criteria-debug.component.html',
  styleUrls: ['./search-criteria-debug.component.scss']
})
export class SearchCriteriaDebugComponent implements OnInit, OnDestroy {

  model: SearchCriteria;
  private subscription: Subscription;
  constructor(private search: SearchService) { }

  ngOnInit() {
    this.subscription = this.search.Stream.subscribe((criteria: SearchCriteria) => this.processCriteria(criteria));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private processCriteria(criteria: SearchCriteria) {
    this.model = criteria;
  }

}
