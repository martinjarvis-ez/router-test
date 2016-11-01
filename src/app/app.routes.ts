import { Route }   from '@angular/router';

import {Settings} from './settings';
import {ControlResolver} from './control-resolver';

import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

export const APP_ROUTES: Route[] =[
 { path: 'not-found', component: NotFoundComponent },
 { path: ':contentId', component: LayoutComponent, resolve: { control: ControlResolver } },
 { path: '', redirectTo: '/'+Settings.DefaultContentId, pathMatch: 'full'},
 { path: '**', redirectTo: 'not-found' }
];
