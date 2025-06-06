import { Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { BookListComponent } from './book-list/book-list.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BookListComponent }
];
