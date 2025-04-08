import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  query = signal('');

  setQuery(value: string) {
    this.query.set(value);
  }
}
