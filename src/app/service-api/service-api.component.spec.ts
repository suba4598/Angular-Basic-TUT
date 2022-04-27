import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceApiComponent } from './service-api.component';

describe('ServiceApiComponent', () => {
  let component: ServiceApiComponent;
  let fixture: ComponentFixture<ServiceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
