import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesViewComponent } from './memories-view.component';

describe('MemoriesViewComponent', () => {
  let component: MemoriesViewComponent;
  let fixture: ComponentFixture<MemoriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
