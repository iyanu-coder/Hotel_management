import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandingpageComponent } from './userlandingpage.component';

describe('UserlandingpageComponent', () => {
  let component: UserlandingpageComponent;
  let fixture: ComponentFixture<UserlandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
