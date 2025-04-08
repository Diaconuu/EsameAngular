import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/games.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs/operators';

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

  protected isFavorite = false;

  toggleFavorite() {
  }

}
