import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstatetransportationComponent } from './interstatetransportation.component';

describe('InterstatetransportationComponent', () => {
  let component: InterstatetransportationComponent;
  let fixture: ComponentFixture<InterstatetransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterstatetransportationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterstatetransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
