import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiviteDetailComponent } from './page-activite-detail.component';

describe('PageActiviteDetailComponent', () => {
  let component: PageActiviteDetailComponent;
  let fixture: ComponentFixture<PageActiviteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActiviteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActiviteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
