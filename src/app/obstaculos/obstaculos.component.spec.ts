import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstaculosComponent } from './obstaculos.component';

describe('ObstaculosComponent', () => {
  let component: ObstaculosComponent;
  let fixture: ComponentFixture<ObstaculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObstaculosComponent]
    });
    fixture = TestBed.createComponent(ObstaculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
