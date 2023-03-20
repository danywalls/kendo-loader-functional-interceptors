import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { NbAService } from './services/nba.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { LoaderModule, IndicatorsModule } from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, LoaderModule, IndicatorsModule],
})
export class AppComponent {
  players: any[] = [];
  teams: any[] = [];

  loading$ = this.loader.isLoading$;

  constructor(private nbaApi: NbAService, private loader: LoaderService) {}

  loadPLayers() {
    this.players = [];
    this.nbaApi.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

  loadTeams() {
    this.nbaApi.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }
}
