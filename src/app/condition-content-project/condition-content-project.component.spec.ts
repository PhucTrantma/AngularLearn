import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionContentProjectComponent } from './condition-content-project.component';

describe('ConditionContentProjectComponent', () => {
  let component: ConditionContentProjectComponent;
  let fixture: ComponentFixture<ConditionContentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionContentProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionContentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
