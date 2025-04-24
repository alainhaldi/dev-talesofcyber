import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDialogPasswordComponent } from './questions-dialog-password.component';

describe('QuestionsDialogPasswordComponent', () => {
  let component: QuestionsDialogPasswordComponent;
  let fixture: ComponentFixture<QuestionsDialogPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsDialogPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsDialogPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
