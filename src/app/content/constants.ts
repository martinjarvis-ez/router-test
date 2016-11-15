import { Type } from '@angular/core';

import { HtmlComponent, NotFoundComponent, BannerComponent } from './components/index';
import { RootLayoutComponent, MasterLayoutComponent } from './layouts/index';
import { ControlService, CurrentContentService, ControlResolverService, ControlToComponentMapperService, FactoryMapService } from './services/index';

export const CONTENT_COMPONENTS: Type<any>[] = [
  HtmlComponent,
  NotFoundComponent,
  BannerComponent,
  RootLayoutComponent,
  MasterLayoutComponent];

export const CONTENT_BOOTSTRAP_COMPONENTS: Type<any>[] = [
  BannerComponent
];

export const CONTENT_SERVICES: Type<any>[] = [
  ControlService,
  CurrentContentService,
  ControlResolverService,
  ControlToComponentMapperService,
  FactoryMapService
];

export const CONTENT_ROOT_COMPONENTS: { [key: string]: Type<any>; } = {
  "banner": HtmlComponent,
  "cms-html": HtmlComponent
};

export const CONTENT_COMPONENT_MAPPING: { [path: string]: Type<any>; } = {
  "/Views/Shared/Master Layout.cshtml": MasterLayoutComponent,
  "/Views/Html.cshtml": HtmlComponent,
  "/Views/Banner.cshtml": BannerComponent
};
