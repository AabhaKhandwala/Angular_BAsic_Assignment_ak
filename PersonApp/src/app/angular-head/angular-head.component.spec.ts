import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHeadComponent } from './angular-head.component';

describe('AngularHeadComponent', () => {
  let component: AngularHeadComponent;
  let fixture: ComponentFixture<AngularHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
