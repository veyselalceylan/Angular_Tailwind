import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersalesComponent } from './containersales.component';

describe('ContainersalesComponent', () => {
  let component: ContainersalesComponent;
  let fixture: ComponentFixture<ContainersalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainersalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
