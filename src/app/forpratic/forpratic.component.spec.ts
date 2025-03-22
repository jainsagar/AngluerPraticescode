import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpraticComponent } from './forpratic.component';

describe('ForpraticComponent', () => {
  let component: ForpraticComponent;
  let fixture: ComponentFixture<ForpraticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForpraticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForpraticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
