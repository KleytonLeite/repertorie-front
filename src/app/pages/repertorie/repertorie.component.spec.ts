import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertorieComponent } from './repertorie.component';

describe('RepertorieComponent', () => {
  let component: RepertorieComponent;
  let fixture: ComponentFixture<RepertorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepertorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
