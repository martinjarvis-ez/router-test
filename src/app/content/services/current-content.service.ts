import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import { Layout, Placeholder } from '../../core/index';

@Injectable()
export class CurrentContentService {

  Stream: LayoutEventEmitter;

  constructor() {
    this.Stream = new LayoutEventEmitter();
    this.Stream.subscribe((layout) => {
      this.layout = layout;
      this.placeholders = layout.placeholders;
    })
  }

  layout: Layout;

  placeholders: Placeholder[];
}

export class LayoutEventEmitter extends Subject<Layout> {
  emit(value: Layout) {
    super.next(value);
  }
}
