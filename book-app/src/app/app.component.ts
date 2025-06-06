import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookComponent, DashboardComponent],
  template: `
    <h1>📚 Book Application</h1>
    <app-dashboard></app-dashboard>
    <hr />
    <app-book></app-book>
  `
})
export class AppComponent { }
