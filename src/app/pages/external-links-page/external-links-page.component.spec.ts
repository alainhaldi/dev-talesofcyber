import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinksPageComponent } from './external-links-page.component';

describe('ExternalLinksPageComponent', () => {
  let component: ExternalLinksPageComponent;
  let fixture: ComponentFixture<ExternalLinksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalLinksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
