import { Injectable } from '@angular/core';

@Injectable()
export class BrowserNavigationService {

  constructor() { }

  navigate(targetPath:string){
      window.location.href = targetPath;
  }

}
