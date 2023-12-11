import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashbordsComponent } from './page-dashbords.component';

describe('PageDashbordsComponent', () => {
  let component: PageDashbordsComponent;
  let fixture: ComponentFixture<PageDashbordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDashbordsComponent]
    });
    fixture = TestBed.createComponent(PageDashbordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
