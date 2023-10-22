import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFormComponent } from './sort-form.component';

describe('SortFormComponent', () => {
  let component: SortFormComponent;
  let fixture: ComponentFixture<SortFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortFormComponent],
    });
    fixture = TestBed.createComponent(SortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
