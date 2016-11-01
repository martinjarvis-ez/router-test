import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Widget} from '../widget';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  widget:Widget;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.widget=  this.route.snapshot.data['widget'];
  }

}
