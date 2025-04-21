import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTitleComponent } from './bs-title.component';

describe('BsTitleComponent', () => {
  let component: BsTitleComponent;
  let fixture: ComponentFixture<BsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
