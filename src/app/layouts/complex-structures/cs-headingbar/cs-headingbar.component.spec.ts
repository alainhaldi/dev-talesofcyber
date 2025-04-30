import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsHeadingbarComponent } from './cs-headingbar.component';

describe('CsHeadingbarComponent', () => {
  let component: CsHeadingbarComponent;
  let fixture: ComponentFixture<CsHeadingbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsHeadingbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsHeadingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
