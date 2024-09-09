import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainermodificationsComponent } from './containermodifications.component';

describe('ContainermodificationsComponent', () => {
  let component: ContainermodificationsComponent;
  let fixture: ComponentFixture<ContainermodificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainermodificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainermodificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
