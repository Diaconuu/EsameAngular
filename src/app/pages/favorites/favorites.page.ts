import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule, GameCardComponent, NavbarComponent],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.css'],
})
export class FavoritesPage {
  protected favorites = inject(FavoritesService);
  protected games = computed(() => this.favorites.favorites());
}
