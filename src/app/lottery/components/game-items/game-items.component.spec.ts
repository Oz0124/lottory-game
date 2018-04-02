import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemsComponent } from './game-items.component';

describe('GameItemsComponent', () => {
  let component: GameItemsComponent;
  let fixture: ComponentFixture<GameItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
