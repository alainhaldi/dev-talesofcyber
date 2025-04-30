import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTopicQuestionDialogComponent } from './cs-topic-question-dialog.component';

describe('CsTopicQuestionDialogComponent', () => {
  let component: CsTopicQuestionDialogComponent;
  let fixture: ComponentFixture<CsTopicQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsTopicQuestionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsTopicQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
