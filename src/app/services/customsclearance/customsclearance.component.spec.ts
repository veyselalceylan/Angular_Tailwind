import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsclearanceComponent } from './customsclearance.component';

describe('CustomsclearanceComponent', () => {
  let component: CustomsclearanceComponent;
  let fixture: ComponentFixture<CustomsclearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsclearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsclearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
