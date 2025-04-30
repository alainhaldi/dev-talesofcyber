import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsButtonComponent } from './bs-button.component';

describe('BsButtonComponent', () => {
  let component: BsButtonComponent;
  let fixture: ComponentFixture<BsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
