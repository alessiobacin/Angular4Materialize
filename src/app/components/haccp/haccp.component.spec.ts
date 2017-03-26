import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpComponent } from './haccp.component';

describe('HaccpComponent', () => {
  let component: HaccpComponent;
  let fixture: ComponentFixture<HaccpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaccpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
