import { Injectable } from '@angular/core';
import {Layout, Placeholder} from './control';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CurrentContentService {

  Stream: LayoutEventEmitter;

  constructor() {
    this.Stream = new LayoutEventEmitter();
    this.Stream.subscribe((layout)=>{
      this.layout=layout;
      this.placeholders=layout.placeholders;
    })
  }

  layout: Layout;

  placeholders: Placeholder[];
}

export class LayoutEventEmitter extends Subject<Layout> {
  emit(value) {
    super.next(value);
  }
}
