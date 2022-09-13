import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHandlerLibComponent } from './request-handler-lib.component';

describe('RequestHandlerLibComponent', () => {
  let component: RequestHandlerLibComponent;
  let fixture: ComponentFixture<RequestHandlerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestHandlerLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestHandlerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
