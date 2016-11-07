import { Type } from '@angular/core';
import { HtmlComponent } from 'content/components/html/html.component';
import { NotFoundComponent } from 'content/components/not-found/not-found.component';
import { RootLayoutComponent } from 'content/layouts/root-layout/root-layout.component';
import { MasterLayoutComponent } from 'content/layouts/master-layout/master-layout.component';

import { BannerComponent } from './components/banner/banner.component';

import { ControlService } from 'content/services/control.service';
import { CurrentContentService } from 'content/services/current-content.service';

import { ControlResolverService } from 'content/services/control-resolver.service';
import { ControlToComponentMapperService } from 'content/services/control-to-component-mapper.service';
import { FactoryMapService } from 'content/services/factory-map.service';

export const COMPONENTS: Type<any>[] = [
  HtmlComponent,
  NotFoundComponent,
  BannerComponent,
  RootLayoutComponent,
  MasterLayoutComponent];

export const SERVICES: Type<any>[] = [
  ControlService,
  CurrentContentService,
  ControlResolverService,
  ControlToComponentMapperService,
  FactoryMapService
];

export const COMPONENT_MAPPING: {[path:string]: any; }={
  "/Views/Shared/Master Layout.cshtml" : MasterLayoutComponent,
  "/Views/Html.cshtml" : HtmlComponent,
  "/Views/Banner.cshtml" : BannerComponent
};
