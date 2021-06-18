import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldInterpolationComponent } from './hello-world-interpolation.component';

describe('HelloWorldInterpolationComponent', () => {
  let component: HelloWorldInterpolationComponent;
  let fixture: ComponentFixture<HelloWorldInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
