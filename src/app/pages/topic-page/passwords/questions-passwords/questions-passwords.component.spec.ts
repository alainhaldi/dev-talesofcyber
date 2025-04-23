import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPasswordsComponent } from './questions-passwords.component';

describe('QuestionsPasswordsComponent', () => {
  let component: QuestionsPasswordsComponent;
  let fixture: ComponentFixture<QuestionsPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsPasswordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
