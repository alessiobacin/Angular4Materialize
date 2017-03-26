import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSecurityComponent } from './work-security.component';

describe('WorkSecurityComponent', () => {
  let component: WorkSecurityComponent;
  let fixture: ComponentFixture<WorkSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
