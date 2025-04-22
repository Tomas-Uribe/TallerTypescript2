import { Component } from '@angular/core';
import { SeriesListComponent } from './series-list/series-list.component';

@Component({
  selector: 'app-root',
  standalone: true,                       
  imports: [SeriesListComponent],          
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'series-app';
}
