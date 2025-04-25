import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsBulletsComponent } from './bs-bullets.component';

describe('BsBulletsComponent', () => {
  let component: BsBulletsComponent;
  let fixture: ComponentFixture<BsBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsBulletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
