import { ComponentRef,  OnDestroy } from '@angular/core';
import { Placeholder } from './control';

export class CommonControlComponent implements OnDestroy {

  templateReference: ComponentRef<any>[] = [];

  ngOnDestroy(): void {
    this.destroyReferences();
  }
  private destroyReferences() {
    if (this.templateReference) {
      for (let tr of this.templateReference) {
        tr.destroy();
      }
      this.templateReference = [];
    }
  }
}
