import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';       // <-- Import CommonModule
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { AuthorGroup } from '../author-group.model';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],                           // <-- Add CommonModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latestBooks: Book[] = [];
  oldestBooks: Book[] = [];
  authorGroups: AuthorGroup[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadLatestBooks();
    this.loadOldestBooks();
    this.loadAuthorGroups();
  }

  loadLatestBooks(): void {
    this.bookService.getLatestBooks(5).subscribe(data => {
      this.latestBooks = data;
    });
  }

  loadOldestBooks(): void {
    this.bookService.getOldestBooks(10).subscribe(data => {
      this.oldestBooks = data;
    });
  }

  loadAuthorGroups(): void {
    this.bookService.getAuthorGroups().subscribe(data => {
      this.authorGroups = data;
      this.renderChart();
    });
  }

  private renderChart(): void {
    const labels = this.authorGroups.map(a => a.author);
    const counts = this.authorGroups.map(a => a.count);

    new Chart('booksByAuthorChart', {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: counts,
          backgroundColor: [
            '#3498db', '#e74c3c', '#f1c40f',
            '#2ecc71', '#9b59b6', '#f39c12',
            '#1abc9c', '#8e44ad', '#d35400',
            '#16a085'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}
