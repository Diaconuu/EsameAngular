import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.css'],
})
export class DetailPage {
  protected isFavorite = false;

  toggleFavorite() {

  }

  getPlatformNames(): string {

    return '';
  }

  protected game: any;
  protected screenshots: any;
  protected trailers: any;
}
