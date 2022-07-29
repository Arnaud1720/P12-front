import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdherentComponent } from './page-adherent.component';

describe('PageAdherentComponent', () => {
  let component: PageAdherentComponent;
  let fixture: ComponentFixture<PageAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
