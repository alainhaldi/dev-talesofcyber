import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTermComponent } from './bs-term.component';

describe('BsTermComponent', () => {
  let component: BsTermComponent;
  let fixture: ComponentFixture<BsTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
