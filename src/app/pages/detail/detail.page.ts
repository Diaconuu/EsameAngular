import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/games.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs/operators';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css'],
})
export class DetailPage {
  private route = inject(ActivatedRoute);
  private gameService = inject(GameService);
  protected favorites = inject(FavoritesService);

  private gameId$ = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter((id): id is string => id !== null)
    ),
    { initialValue: '' }
  );

  protected game = this.gameService.getGameById(this.gameId$()!);
  protected screenshots = this.gameService.getGameScreenshots(this.gameId$()!);
  protected trailers = this.gameService.getGameTrailers(this.gameId$()!);

  getPlatformNames(): string {
    return this.game()?.platforms?.map(p => p.platform.name).join(', ') ?? 'N/D';
  }

  toggleFavorite() {
    if (this.game()) {
      this.favorites.toggleFavorite(this.game()!);
    }
  }

  isFav() {
    return this.game() ? this.favorites.isFavorite(this.game()!.id) : false;
  }
}
