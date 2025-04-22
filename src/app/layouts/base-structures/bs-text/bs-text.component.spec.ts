import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTextComponent } from './bs-text.component';

describe('BsTextComponent', () => {
  let component: BsTextComponent;
  let fixture: ComponentFixture<BsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
