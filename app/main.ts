import 'reflect-metadata';
import 'es6-shim';
import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);