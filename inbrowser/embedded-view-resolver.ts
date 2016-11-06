import { Type, ViewMetadata, Reflector, Injectable, ComponentMetadata } from '@angular/core';
import { ViewResolver } from '@angular/compiler';

const TemplateElementName = 'ng2-template';

@Injectable()
export class EmbeddedViewResolver extends ViewResolver
{
  constructor(private _r: Reflector){ super() }
  resolve(component: Type): ViewMetadata
  {
    debugger;
    let annotations = this._r.annotations(component);
    annotations.forEach( cm =>
    {
      if(cm instanceof ComponentMetadata && cm.templateUrl && typeof cm.templateUrl == 'string' )
      {
        let elemTpl = (<any>document).getElementById(cm.templateUrl);
        if( elemTpl && elemTpl.tagName === SCRIPT_TYPE_NAME )
        {
          debugger;
          cm.template = elemTpl.innerHTML;
          elemTpl.remove();
          cm.templateUrl = undefined
        }
      }
    })
    return super.resolve(component)
  }
}
