import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcllcldeliveryComponent } from './fcllcldelivery.component';

describe('FcllcldeliveryComponent', () => {
  let component: FcllcldeliveryComponent;
  let fixture: ComponentFixture<FcllcldeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcllcldeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcllcldeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
