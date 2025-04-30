import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSpacerContainerComponent } from './bs-spacer-container.component';

describe('BsSpacerContainerComponent', () => {
  let component: BsSpacerContainerComponent;
  let fixture: ComponentFixture<BsSpacerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsSpacerContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsSpacerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
