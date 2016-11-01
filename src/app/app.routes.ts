import { Route }   from '@angular/router';

import {Settings} from './settings';
import {WidgetResolver} from './widget-resolver';

import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

export const APP_ROUTES: Route[] =[
 { path: ':contentId', component: LayoutComponent, resolve: { widget: WidgetResolver } },
 { path: '', redirectTo: `${Settings.DefaultContentId}`, pathMatch: 'full'},
 { path: '**', component: NotFoundComponent }
];
