import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroomlistComponent } from './adminroomlist.component';

describe('AdminroomlistComponent', () => {
  let component: AdminroomlistComponent;
  let fixture: ComponentFixture<AdminroomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminroomlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
