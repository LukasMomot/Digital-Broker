import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAndSellFormComponent } from './buy-and-sell-form.component';

describe('BuyAndSellFormComponent', () => {
  let component: BuyAndSellFormComponent;
  let fixture: ComponentFixture<BuyAndSellFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAndSellFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAndSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
