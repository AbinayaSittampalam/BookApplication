import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { BookService } from './book.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule),
    provideRouter(appRoutes),
    BookService
  ]
};
