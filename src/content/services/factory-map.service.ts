import { Injectable, Type} from '@angular/core';

@Injectable()
export class FactoryMapService {

  readonly map: {[path:string]: any; }={ };

  registerFactory(path:string, factory:Type<any>){
    this.map[path] = factory;
  }

}
