import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRiveComponent } from './bs-rive.component';

describe('BsRiveComponent', () => {
  let component: BsRiveComponent;
  let fixture: ComponentFixture<BsRiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsRiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsRiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
