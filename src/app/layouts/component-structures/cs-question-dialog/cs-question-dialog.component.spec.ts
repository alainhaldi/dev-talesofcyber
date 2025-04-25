import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsQuestionDialogComponent } from './cs-question-dialog.component';

describe('CsQuestionDialogComponent', () => {
  let component: CsQuestionDialogComponent;
  let fixture: ComponentFixture<CsQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsQuestionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
