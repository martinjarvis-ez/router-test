import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchCriteria } from '../search-criteria';
import * as cloneDeep from "lodash/cloneDeep";
import {ControlComponent} from '../control-component';

@Component({
  selector: 'search-pod',
  templateUrl: './search-pod.component.html',
  styleUrls: ['./search-pod.component.scss']
})
export class SearchPodComponent  extends ControlComponent implements OnInit {

  model : SearchCriteria;

  constructor(private search : SearchService) { super(); }

  ngOnInit() {
      this.model = new SearchCriteria();
  }

  onSubmit(){
    var current = cloneDeep(this.model);
    this.search.Stream.emit(current);
  }

}
