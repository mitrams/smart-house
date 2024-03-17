import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcofootprintComponent } from './ecofootprint.component';

describe('EcofootprintComponent', () => {
  let component: EcofootprintComponent;
  let fixture: ComponentFixture<EcofootprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcofootprintComponent]
    });
    fixture = TestBed.createComponent(EcofootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
