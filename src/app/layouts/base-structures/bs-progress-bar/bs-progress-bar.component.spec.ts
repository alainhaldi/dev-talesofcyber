import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsProgressBarComponent } from './bs-progress-bar.component';

describe('BsProgressBarComponent', () => {
  let component: BsProgressBarComponent;
  let fixture: ComponentFixture<BsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
