import { Type } from '@angular/core';

import { SettingsService, DrawerService, NavigationService } from './services';
import { FieldDirective } from './directives';
import { DrawerComponent } from './components';

export const CORE_DIRECTIVES: Type<any>[] = [FieldDirective];

export const CORE_COMPONENTS: Type<any>[] = [DrawerComponent];

export const CORE_SERVICES: Type<any>[] = [SettingsService, NavigationService, DrawerService];

export const CORE_BOOTSTRAP_COMPONENTS: Type<any>[] = [
  DrawerComponent
]

export const CORE_ROOT_COMPONENTS: { [key: string]: Type<any>; } = {
  "drawer": DrawerComponent
};
