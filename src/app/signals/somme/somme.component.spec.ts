import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommeComponent } from './somme.component';

describe('SommeComponent', () => {
  let component: SommeComponent;
  let fixture: ComponentFixture<SommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
