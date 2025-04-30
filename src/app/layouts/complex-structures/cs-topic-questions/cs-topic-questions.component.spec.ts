import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTopicQuestionsComponent } from './cs-topic-questions.component';

describe('CsTopicQuestionsComponent', () => {
  let component: CsTopicQuestionsComponent;
  let fixture: ComponentFixture<CsTopicQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsTopicQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsTopicQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
