import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryPageComponentComponent } from './lottery-page-component.component';

describe('LotteryPageComponentComponent', () => {
  let component: LotteryPageComponentComponent;
  let fixture: ComponentFixture<LotteryPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
