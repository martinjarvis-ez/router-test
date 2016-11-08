import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchCriteria } from '../../models/search-criteria';
import * as cloneDeep from "lodash/cloneDeep";
import { RootControlComponent } from '../../../core/components/root-control.component';
import { Router } from '@angular/router';

@Component({
  selector: 'search-pod',
  templateUrl: './search-pod.component.html',
  styleUrls: ['./search-pod.component.scss']
})
export class SearchPodComponent extends RootControlComponent implements OnInit {

  model: SearchCriteria;

  constructor(private search: SearchService, elm: ElementRef, private router: Router) {
    super(elm);
  }

  ngOnInit() {
    this.model = new SearchCriteria();
  }

  onSubmit() {
    let current = cloneDeep(this.model);
    this.search.Stream.emit(current);
    let nextStep = this.getFieldValue('Next Step');
    if (nextStep) {
      this.router.navigate([nextStep]);
    }
  }

}
