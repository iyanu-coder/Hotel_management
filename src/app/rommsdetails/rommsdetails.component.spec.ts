import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RommsdetailsComponent } from './rommsdetails.component';

describe('RommsdetailsComponent', () => {
  let component: RommsdetailsComponent;
  let fixture: ComponentFixture<RommsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RommsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RommsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
