import { Type } from '@angular/core';

import { HtmlComponent, NotFoundComponent, BannerComponent } from './components/index';
import { RootLayoutComponent, MasterLayoutComponent } from './layouts/index';
import { ControlService, CurrentContentService, ControlResolverService, ControlToComponentMapperService, FactoryMapService } from './services/index';

export const COMPONENTS: Type<any>[] = [
  HtmlComponent,
  NotFoundComponent,
  BannerComponent,
  RootLayoutComponent,
  MasterLayoutComponent];

export const BOOTSTRAP_COMPONENTS: Type<any>[] = [
  BannerComponent
];

export const SERVICES: Type<any>[] = [
  ControlService,
  CurrentContentService,
  ControlResolverService,
  ControlToComponentMapperService,
  FactoryMapService
];

export const COMPONENT_MAPPING: { [path: string]: any; } = {
  "/Views/Shared/Master Layout.cshtml": MasterLayoutComponent,
  "/Views/Html.cshtml": HtmlComponent,
  "/Views/Banner.cshtml": BannerComponent
};
