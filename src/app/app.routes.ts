import { Route }   from '@angular/router';

import { ControlResolverService } from 'content/services/control-resolver.service';

import { NotFoundComponent } from 'content/components/not-found/not-found.component';
import { RootLayoutComponent } from 'content/layouts/root-layout/root-layout.component';

export const APP_ROUTES: Route[] =[
 { path: 'not-found', component: NotFoundComponent },
 { path: ':contentId', component: RootLayoutComponent, resolve: { control: ControlResolverService } },
{ path: '**', redirectTo: 'not-found' }
];
