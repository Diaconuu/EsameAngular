import { Injectable, signal, effect } from '@angular/core';
import { Game } from '../types/game';

const STORAGE_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private _favorites = signal<Game[]>(this.loadFavorites());

  readonly favorites = this._favorites.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._favorites()));
    });
  }

  toggleFavorite(game: Game): void {
    const current = this._favorites();
    const exists = current.some(g => g.id === game.id);
    this._favorites.set(
      exists
        ? current.filter(g => g.id !== game.id)
        : [...current, game]
    );
  }

  isFavorite(id: number): boolean {
    return this._favorites().some(g => g.id === id);
  }

  private loadFavorites(): Game[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
