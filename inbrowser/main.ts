import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { protectPlaceholders } from './protect-placeholders';

protectPlaceholders();
platformBrowserDynamic().bootstrapModule(AppModule);
