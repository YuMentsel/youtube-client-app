import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { StatusColorDirective } from '../../youtube/directives/status-color.directive';
import { SearchItem } from '../../youtube/models/search-item.model';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomButtonComponent, StatusColorDirective],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem!: SearchItem;

  constructor(private router: Router) {}

  showDetailedInfo(): void {
    this.router.navigate(['/youtube', this.searchItem.id]);
  }
}
