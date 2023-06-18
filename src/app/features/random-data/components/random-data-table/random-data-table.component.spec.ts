import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDataTableComponent } from './random-data-table.component';

describe('RandomDataTableComponent', () => {
  let component: RandomDataTableComponent;
  let fixture: ComponentFixture<RandomDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomDataTableComponent]
    });
    fixture = TestBed.createComponent(RandomDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
