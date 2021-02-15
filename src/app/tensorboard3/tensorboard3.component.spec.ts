import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tensorboard3Component } from './tensorboard3.component';

describe('Tensorboard3Component', () => {
  let component: Tensorboard3Component;
  let fixture: ComponentFixture<Tensorboard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tensorboard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tensorboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
