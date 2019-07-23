import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChowDownComponent } from './chow-down.component';

describe('ChowDownComponent', () => {
  let component: ChowDownComponent;
  let fixture: ComponentFixture<ChowDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChowDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
