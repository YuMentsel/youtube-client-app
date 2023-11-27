import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SortFormComponent } from './sort-form.component';
import { SortService } from '../../services/sort-form/sort-form.service';
import { Direction } from '../../../constants/enums';

describe('SortFormComponent', () => {
  let component: SortFormComponent;
  let fixture: ComponentFixture<SortFormComponent>;
  let sortServiceMock: SortService;

  beforeEach(() => {
    sortServiceMock = {
      setSortSettings: jest.fn(),
      setSortingValue: jest.fn(),
    } as unknown as SortService;

    TestBed.configureTestingModule({
      declarations: [SortFormComponent],
      imports: [FormsModule],
      providers: [{ provide: SortService, useValue: sortServiceMock }],
    });

    fixture = TestBed.createComponent(SortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setSortingType', () => {
    it('should toggle sort direction and call setSortSettings', () => {
      expect(component.sortDir).toEqual('');

      const dateItem = fixture.nativeElement.querySelector('.sort-form__item:nth-child(1)');
      dateItem.click();
      fixture.detectChanges();

      expect(component.sortDir).toEqual(Direction.asc);
      expect(sortServiceMock.setSortSettings).toHaveBeenCalledWith({
        sortType: 'date',
        sortDir: Direction.asc,
      });
    });
  });

  describe('submitSortValue', () => {
    it('should call setSortingValue with the current sort value', () => {
      expect(component.sortValue).toEqual('');

      const input = fixture.nativeElement.querySelector('.sort-form__input');
      input.value = 'value';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(sortServiceMock.setSortingValue).toHaveBeenCalledWith('value');
    });
  });
});
