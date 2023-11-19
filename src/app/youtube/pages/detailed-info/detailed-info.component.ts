import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemById } from '../../../redux/selectors/youtube.selectors';
import { Item } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  private id!: string;

  searchItem$!: Observable<Item<string>>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    const item = this.store.select(selectItemById(this.id));

    if (item) {
      this.searchItem$ = item as Observable<Item<string>>;
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  goBack(): void {
    window.history.back();
  }
}
