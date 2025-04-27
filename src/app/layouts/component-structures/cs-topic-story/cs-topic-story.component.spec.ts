import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTopicStoryComponent } from './cs-topic-story.component';

describe('CsTopicStoryComponent', () => {
  let component: CsTopicStoryComponent;
  let fixture: ComponentFixture<CsTopicStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsTopicStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsTopicStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
