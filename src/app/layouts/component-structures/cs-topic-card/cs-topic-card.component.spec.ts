import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTopicCardComponent } from './cs-topic-card.component';

describe('CsTopicCardComponent', () => {
  let component: CsTopicCardComponent;
  let fixture: ComponentFixture<CsTopicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsTopicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsTopicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
