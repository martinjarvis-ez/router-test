import { Type } from '@angular/core';
import { HtmlComponent } from './components/html/html.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';

import { BannerComponent } from './components/banner/banner.component';

import { ControlService } from './services/control.service';
import { CurrentContentService } from './services/current-content.service';

import { ControlResolverService } from './services/control-resolver.service';
import { ControlToComponentMapperService } from './services/control-to-component-mapper.service';
import { FactoryMapService } from './services/factory-map.service';

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

export const COMPONENT_MAPPING: {[path:string]: any; }={
  "/Views/Shared/Master Layout.cshtml" : MasterLayoutComponent,
  "/Views/Html.cshtml" : HtmlComponent,
  "/Views/Banner.cshtml" : BannerComponent
};
