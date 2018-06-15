import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShopsComponent } from './display-shops.component';

describe('DisplayShopsComponent', () => {
  let component: DisplayShopsComponent;
  let fixture: ComponentFixture<DisplayShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
