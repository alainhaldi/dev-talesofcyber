import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsLinkComponent } from './bs-link.component';

describe('BsLinkComponent', () => {
  let component: BsLinkComponent;
  let fixture: ComponentFixture<BsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
