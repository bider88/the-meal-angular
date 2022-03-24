import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailDishComponent } from './card-detail-dish.component';

describe('CardDetailDishComponent', () => {
  let component: CardDetailDishComponent;
  let fixture: ComponentFixture<CardDetailDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
