import { Component, OnInit, OnDestroy } from '@angular/core';
import {SearchService} from '../../services/search.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchCriteria } from '../../models/search-criteria'

let module:any; // nasty fix for systemJs

@Component({
  moduleId: module.id, // nasty fix for systemJs
  selector: 'search-criteria-debug',
  templateUrl: './search-criteria-debug.component.html',
  styleUrls: ['./search-criteria-debug.component.scss']
})
export class SearchCriteriaDebugComponent implements OnInit, OnDestroy  {

  model:SearchCriteria;
  private subscription : Subscription;
  constructor(private search : SearchService) { }

  ngOnInit() {
    this.subscription = this.search.Stream.subscribe(criteria => this.processCriteria(criteria));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

    private processCriteria(criteria:SearchCriteria ){
          this.model =criteria;
      }

}
