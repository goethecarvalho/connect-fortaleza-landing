import { bootstrapApplication } from '@angular/platform-browser';
import { LandingComponent } from './app/landing/landing';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(LandingComponent, {
  providers: [provideServiceWorker('ngsw-worker.js', {
              enabled: !isDevMode(),
              registrationStrategy: 'registerWhenStable:30000'
            })]
});