import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchCriteria } from '../../models/search-criteria';
import * as cloneDeep from "lodash/cloneDeep";
import { RootControlComponent } from '../../../core/components/root-control.component';

let module: any; // nasty fix for systemJs

@Component({
  moduleId: module.id, // nasty fix for systemJs
  selector: 'search-pod',
  templateUrl: './search-pod.component.html',
  styleUrls: ['./search-pod.component.scss']
})
export class SearchPodComponent extends RootControlComponent implements OnInit {

  model: SearchCriteria;

  constructor(private search: SearchService, elm: ElementRef) {
    super(elm);
  }

  ngOnInit() {
    this.model = new SearchCriteria();
  }

  onSubmit() {
    var current = cloneDeep(this.model);
    this.search.Stream.emit(current);
  }

}
