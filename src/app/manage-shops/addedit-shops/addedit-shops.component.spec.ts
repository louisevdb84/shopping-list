import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditShopsComponent } from './addedit-shops.component';

describe('AddeditShopsComponent', () => {
  let component: AddeditShopsComponent;
  let fixture: ComponentFixture<AddeditShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
