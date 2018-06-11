import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingComponent } from './repeating.component';

describe('RepeatingComponent', () => {
  let component: RepeatingComponent;
  let fixture: ComponentFixture<RepeatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
