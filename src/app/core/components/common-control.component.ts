import { ComponentRef,  OnDestroy } from '@angular/core';

export class CommonControlComponent implements OnDestroy {

  templateReference: ComponentRef<any>[] = [];

  ngOnDestroy(): void {
    this.destroyReferences();
  }
  destroyReferences() {
    if (this.templateReference) {
      for (let tr of this.templateReference) {
        tr.destroy();
      }
      this.templateReference = [];
    }
  }
}
