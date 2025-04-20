import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsToolbarComponent } from './cs-toolbar.component';

describe('CsToolbarComponent', () => {
  let component: CsToolbarComponent;
  let fixture: ComponentFixture<CsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
