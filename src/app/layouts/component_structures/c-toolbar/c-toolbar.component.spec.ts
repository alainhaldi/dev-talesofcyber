import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToolbarComponent } from './c-toolbar.component';

describe('CToolbarComponent', () => {
  let component: CToolbarComponent;
  let fixture: ComponentFixture<CToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
