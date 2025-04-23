import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPasswordsComponent } from './story-passwords.component';

describe('StoryPasswordsComponent', () => {
  let component: StoryPasswordsComponent;
  let fixture: ComponentFixture<StoryPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryPasswordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
