import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSwitchRoleComponent } from './page-switch-role.component';

describe('PageSwitchRoleComponent', () => {
  let component: PageSwitchRoleComponent;
  let fixture: ComponentFixture<PageSwitchRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSwitchRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSwitchRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
