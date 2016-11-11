import { Type } from '@angular/core';

import { SettingsService, DrawerService, NavigationService } from './services';
import { FieldDirective } from './directives';
import { DrawerComponent } from './components';

export const DIRECTIVES: Type<any>[] = [FieldDirective];

export const COMPONENTS: Type<any>[] = [DrawerComponent];

export const SERVICES: Type<any>[] = [SettingsService, NavigationService, DrawerService];
