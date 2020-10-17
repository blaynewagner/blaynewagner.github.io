import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsILoveViewComponent } from './things-i-love-view.component';

describe('ThingsILoveViewComponent', () => {
  let component: ThingsILoveViewComponent;
  let fixture: ComponentFixture<ThingsILoveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsILoveViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsILoveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
