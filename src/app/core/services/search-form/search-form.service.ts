import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchValue = '';

  setSearchValue(value: string): void {
    this.searchValue = value;
  }
}
