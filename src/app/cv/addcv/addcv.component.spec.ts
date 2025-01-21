import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcvComponent } from './addcv.component';

describe('AddcvComponent', () => {
  let component: AddcvComponent;
  let fixture: ComponentFixture<AddcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
