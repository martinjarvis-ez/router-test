import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchCriteria } from '../search-criteria';
import * as cloneDeep from "lodash/cloneDeep";

@Component({
  selector: 'search-pod',
  templateUrl: './search-pod.component.html',
  styleUrls: ['./search-pod.component.scss']
})
export class SearchPodComponent implements OnInit {

  model : SearchCriteria;

  constructor(private search : SearchService) { }

  ngOnInit() {
      this.model = new SearchCriteria();
  }

  onSubmit(){
    var current = cloneDeep(this.model);
    this.search.Stream.emit(current);
  }

}
