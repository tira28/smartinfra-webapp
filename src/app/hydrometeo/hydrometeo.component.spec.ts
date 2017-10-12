import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrometeoComponent } from './hydrometeo.component';

describe('HydrometeoComponent', () => {
  let component: HydrometeoComponent;
  let fixture: ComponentFixture<HydrometeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydrometeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrometeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
