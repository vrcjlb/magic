import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWelcomeUserComponent } from './dashboard-welcome-user.component';

describe('DashboardWelcomeUserComponent', () => {
  let component: DashboardWelcomeUserComponent;
  let fixture: ComponentFixture<DashboardWelcomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWelcomeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWelcomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
