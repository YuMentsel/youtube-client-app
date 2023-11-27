import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { StatisticsComponent } from './statistics.component';
import { Statistics } from '../../models/search-item.model';

const statisticsMock: Statistics = {
  viewCount: '1000',
  likeCount: '500',
  commentCount: '200',
};

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],

      imports: [MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    component.statistics = statisticsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display statistics correctly', () => {
    const iconElements = fixture.debugElement.queryAll(By.css('.statistics__icon'));
    const spanElements = fixture.debugElement.queryAll(By.css('.statistics span'));

    expect(iconElements.length).toBe(3);
    expect(spanElements.length).toBe(3);

    expect(spanElements[0].nativeElement.textContent).toContain('visibility');
    expect(spanElements[0].nativeElement.textContent).toContain('1,000');

    expect(spanElements[1].nativeElement.textContent).toContain('favorite');
    expect(spanElements[1].nativeElement.textContent).toContain('500');

    expect(spanElements[2].nativeElement.textContent).toContain('forum');
    expect(spanElements[2].nativeElement.textContent).toContain('200');
  });
});
