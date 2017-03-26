import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSecurityComponent } from './fire-security.component';

describe('FireSecurityComponent', () => {
  let component: FireSecurityComponent;
  let fixture: ComponentFixture<FireSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
