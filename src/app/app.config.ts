import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DialogService } from './dialog.service';
import { NoSlashHashLocationStrategy } from './no-slash-hash-location-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    DialogService,
    // { provide: LocationStrategy, useClass: NoSlashHashLocationStrategy }
  ]
};