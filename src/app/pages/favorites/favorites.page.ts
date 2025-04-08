import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule, GameCardComponent, NavbarComponent],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.css'],
})
export class FavoritesPage {
  // Da implementare dalla Persona 2
  protected games: any;
}
