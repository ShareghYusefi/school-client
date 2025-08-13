import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom2 } from './custom2';

describe('Custom2', () => {
  let component: Custom2;
  let fixture: ComponentFixture<Custom2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Custom2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custom2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
