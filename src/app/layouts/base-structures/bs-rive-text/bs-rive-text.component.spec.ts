import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRiveTextComponent } from './bs-rive-text.component';

describe('BsRiveTextComponent', () => {
  let component: BsRiveTextComponent;
  let fixture: ComponentFixture<BsRiveTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsRiveTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsRiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
