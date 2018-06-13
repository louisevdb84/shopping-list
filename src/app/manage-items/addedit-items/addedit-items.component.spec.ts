import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditItemsComponent } from './addedit-items.component';

describe('AddeditItemsComponent', () => {
  let component: AddeditItemsComponent;
  let fixture: ComponentFixture<AddeditItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
