import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import {GameService} from '../../services/games.service';
import {GameCardComponent} from '../../components/game-card/game-card.component';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CarouselComponent,
    CategorySectionComponent,
    GameCardComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {
  protected gameService = inject(GameService);
  protected searchService = inject(SearchService);

  protected query = this.searchService.query;
  protected searchResults = this.gameService.searchGamesSignal(this.query);

  protected actionGames = this.gameService.getGamesByCategory('action');
  protected sportGames = this.gameService.getGamesByCategory('sports');
  protected adventureGames = this.gameService.getGamesByCategory('adventure');
  protected shooterGames = this.gameService.getGamesByCategory('shooter');
  protected simulationGames = this.gameService.getGamesByCategory('simulation');
  protected racingGames = this.gameService.getGamesByCategory('racing');
  protected strategyGames = this.gameService.getGamesByCategory('strategy');
  protected puzzleGames = this.gameService.getGamesByCategory('puzzle');
}
