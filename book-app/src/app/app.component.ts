import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'BookApp';
}

