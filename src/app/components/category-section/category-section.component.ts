import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css'],
})
export class CategorySectionComponent {
  @Input() title = '';
  @Input() games: any;
}
