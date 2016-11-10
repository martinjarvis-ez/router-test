import { Type } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { NavigationService } from './services/navigation.service';
import { DrawerService } from './services/drawer.service';
import { FieldDirective } from './directives/field.directive';
import { DrawerComponent } from './components/drawer/drawer.component';

export const DIRECTIVES: Type<any>[] = [FieldDirective];

export const COMPONENTS: Type<any>[] = [DrawerComponent];

export const SERVICES: Type<any>[] = [SettingsService, NavigationService, DrawerService];
