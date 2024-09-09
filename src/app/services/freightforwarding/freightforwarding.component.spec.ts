import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightforwardingComponent } from './freightforwarding.component';

describe('FreightforwardingComponent', () => {
  let component: FreightforwardingComponent;
  let fixture: ComponentFixture<FreightforwardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreightforwardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightforwardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
