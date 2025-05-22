import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, HttpClientModule),   
    BookService
  ]
};
