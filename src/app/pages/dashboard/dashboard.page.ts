import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { GameCardComponent } from '../../components/game-card/game-card.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CarouselComponent,
    CategorySectionComponent,
    GameCardComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage {
  //codice per API
}
