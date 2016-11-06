import { Type } from '@angular/core';
import { SettingsService } from './services/settings.service';
import {DynamicTypeBuilderService} from './services/dynamic-type-builder.service';
import { FieldDirective } from './directives/field.directive';


export const DIRECTIVES: Type<any>[] = [FieldDirective];

export const COMPONENTS: Type<any>[] = [];

export const SERVICES: Type<any>[] = [SettingsService, DynamicTypeBuilderService];
