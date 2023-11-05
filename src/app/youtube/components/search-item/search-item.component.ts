import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StatusColorDirective } from '../../directives/status-color.directive';
import { SearchItem } from '../../models/search-item.model';
import { CustomButtonComponent } from '../../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomButtonComponent, StatusColorDirective],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem!: SearchItem;
}
