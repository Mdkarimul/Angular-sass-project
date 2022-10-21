import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSolutionComponent } from './all-solution.component';

describe('AllSolutionComponent', () => {
  let component: AllSolutionComponent;
  let fixture: ComponentFixture<AllSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
