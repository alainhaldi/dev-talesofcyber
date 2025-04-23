import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTopicQuestionHeaderComponent } from './cs-topic-question-header.component';

describe('CsTopicQuestionHeaderComponent', () => {
  let component: CsTopicQuestionHeaderComponent;
  let fixture: ComponentFixture<CsTopicQuestionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsTopicQuestionHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsTopicQuestionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
