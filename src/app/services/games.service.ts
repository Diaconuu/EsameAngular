import { Injectable, inject, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import { map, switchMap, filter } from 'rxjs/operators';
import { Game } from '../types/game';
import {Screenshot} from '../types/screenshot';
import {Trailer} from '../types/trailer';

@Injectable({ providedIn: 'root' })
export class GameService {
  private http = inject(HttpClient);
  private api = 'https://api.rawg.io/api/games';
  private key = '93d1f58bd66048119e1bad2a79204818';

  getFeaturedGames = toSignal(
    this.http.get<{ results: Game[] }>(`${this.api}?key=${this.key}&ordering=-added,-rating&platforms=4,18,1`)
      .pipe(map(res => res.results)),
    { initialValue: [] }
  );

  getGamesByCategory(category: string) {
    return toSignal(
      this.http.get<{ results: Game[] }>(
        `${this.api}?genres=${category}&page_size=10&key=${this.key}`
      ).pipe(map(res => res.results)),
      { initialValue: [] }
    );
  }

  getGameById(id: string): Signal<Game | undefined> {
    return toSignal(
      this.http.get<Game>(`${this.api}/${id}?key=${this.key}`),
      { initialValue: undefined }
    );
  }

  getGameScreenshots(id: string): Signal<Screenshot[]> {
    return toSignal(
      this.http
        .get<{ results: Screenshot[] }>(`${this.api}/${id}/screenshots?key=${this.key}`)
        .pipe(map(res => res.results)),
      { initialValue: [] }
    );
  }

  getGameTrailers(id: string): Signal<Trailer[]> {
    return toSignal(
      this.http
        .get<{ results: Trailer[] }>(`${this.api}/${id}/movies?key=${this.key}`)
        .pipe(map(res => res.results)),
      { initialValue: [] }
    );
  }

  searchGamesSignal(querySignal: Signal<string>) {
    const query$ = toObservable(querySignal);

    return toSignal(
      query$.pipe(
        filter((q): q is string => typeof q === 'string' && q.length > 0),
        switchMap(q =>
          this.http
            .get<{ results: Game[] }>(
              `${this.api}?search=${q}&page_size=10&key=${this.key}`
            )
            .pipe(map(res => res.results))
        )
      ),
      { initialValue: [] }
    );
  }
}
