import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTermDialogComponent } from './bs-term-dialog.component';

describe('BsTermDialogComponent', () => {
  let component: BsTermDialogComponent;
  let fixture: ComponentFixture<BsTermDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsTermDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsTermDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
