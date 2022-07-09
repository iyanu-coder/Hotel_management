import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerlistComponent } from './admincustomerlist.component';

describe('AdmincustomerlistComponent', () => {
  let component: AdmincustomerlistComponent;
  let fixture: ComponentFixture<AdmincustomerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincustomerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
