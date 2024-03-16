import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasComponent } from './gas.component';

describe('GasComponent', () => {
  let component: GasComponent;
  let fixture: ComponentFixture<GasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasComponent]
    });
    fixture = TestBed.createComponent(GasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
