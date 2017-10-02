import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFileDashboardComponent } from './case-file-dashboard.component';

describe('CaseFileDashboardComponent', () => {
  let component: CaseFileDashboardComponent;
  let fixture: ComponentFixture<CaseFileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
