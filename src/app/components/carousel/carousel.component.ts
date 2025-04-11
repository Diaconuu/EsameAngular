import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../types/game';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() games: Game[] = [];
}
