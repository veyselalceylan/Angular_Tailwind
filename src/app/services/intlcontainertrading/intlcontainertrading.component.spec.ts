import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlcontainertradingComponent } from './intlcontainertrading.component';

describe('IntlcontainertradingComponent', () => {
  let component: IntlcontainertradingComponent;
  let fixture: ComponentFixture<IntlcontainertradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntlcontainertradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntlcontainertradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
