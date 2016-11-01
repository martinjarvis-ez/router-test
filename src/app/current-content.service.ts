import { Injectable } from '@angular/core';
import {Layout, Placeholder} from './control';
@Injectable()
export class CurrentContentService {

  constructor() { }

  layout: Layout;

  placeholders: Placeholder[];
}
