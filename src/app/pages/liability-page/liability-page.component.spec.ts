import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityPageComponent } from './liability-page.component';

describe('LiabilityPageComponent', () => {
  let component: LiabilityPageComponent;
  let fixture: ComponentFixture<LiabilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiabilityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiabilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
