import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsBondComponent } from './lets-bond.component';

describe('LetsBondComponent', () => {
  let component: LetsBondComponent;
  let fixture: ComponentFixture<LetsBondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsBondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
