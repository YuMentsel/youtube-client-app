import { Component, Input } from '@angular/core';
import { Statistics } from '../../models/search-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  @Input() statistics!: Statistics;
}
