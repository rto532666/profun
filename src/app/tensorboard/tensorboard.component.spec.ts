import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorboardComponent } from './tensorboard.component';

describe('TensorboardComponent', () => {
  let component: TensorboardComponent;
  let fixture: ComponentFixture<TensorboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensorboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
