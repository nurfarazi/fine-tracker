import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Retained for compatibility if imported elsewhere, but main.ts now builds providers dynamically.
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
