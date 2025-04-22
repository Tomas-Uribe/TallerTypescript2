import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../models/serie';
import { series } from '../data/series';

@Component({
  selector: 'app-series-list',
  standalone: true,               
  imports: [CommonModule],         
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  seriesList: Serie[] = series;

  get averageSeasons(): number {
    return this.seriesList.reduce((total, s) => total + s.seasons, 0) / this.seriesList.length;
  }

  selectedSerie: Serie | null = null;

onSelect(serie: Serie): void {
  this.selectedSerie = serie;
}

}
