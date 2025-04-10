import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Game } from '../../types/game';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game!: Game;
  protected favorites = inject(FavoritesService);

  toggleFavorite() {
    this.favorites.toggleFavorite(this.game);
  }

  isFav(): boolean {
    return this.favorites.isFavorite(this.game.id);
  }
}
