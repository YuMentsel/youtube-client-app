import { Component, OnDestroy, OnInit } from '@angular/core';
import { SortService } from '../../services/sort-form/sort-form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSortForm = false;

  constructor(public sortService: SortService) {}

  ngOnInit(): void {
    this.sortService.isSortForm$.subscribe((val) => {
      this.isSortForm = val;
    });
  }

  ngOnDestroy(): void {
    this.sortService.isSortForm$.unsubscribe();
  }
}
