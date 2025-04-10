import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  protected searchService = inject(SearchService);

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchService.setQuery(input.value.trim());
  }

  @Input() showSearch = true;
  @Input() showFavorites = true;
}
