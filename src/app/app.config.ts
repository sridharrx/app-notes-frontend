import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient() // 👈 Add this line if it's not there
  ]
};
