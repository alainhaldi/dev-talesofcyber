import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsHeadingComponent } from './bs-heading.component';

describe('BsHeadingComponent', () => {
  let component: BsHeadingComponent;
  let fixture: ComponentFixture<BsHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
