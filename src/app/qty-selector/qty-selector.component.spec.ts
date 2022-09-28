import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtySelectorComponent } from './qty-selector.component';

describe('QtySelectorComponent', () => {
  let component: QtySelectorComponent;
  let fixture: ComponentFixture<QtySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
