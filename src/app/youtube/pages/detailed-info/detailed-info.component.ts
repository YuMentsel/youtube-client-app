import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  id!: string;

  searchItem!: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    // const item = this.youtubeService.getById(this.id);
    // if (item) {
    //   this.searchItem = item;
    // } else {
    //   this.router.navigate(['/not-found']);
    // }
  }

  goBack(): void {
    window.history.back();
  }
}
