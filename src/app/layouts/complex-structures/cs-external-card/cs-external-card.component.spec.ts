import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsExternalCardComponent } from './cs-external-card.component';

describe('CsExternalCardComponent', () => {
  let component: CsExternalCardComponent;
  let fixture: ComponentFixture<CsExternalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsExternalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsExternalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
