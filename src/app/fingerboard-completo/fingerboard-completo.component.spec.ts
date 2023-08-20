import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerboardCompletoComponent } from './fingerboard-completo.component';

describe('FingerboardCompletoComponent', () => {
  let component: FingerboardCompletoComponent;
  let fixture: ComponentFixture<FingerboardCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FingerboardCompletoComponent]
    });
    fixture = TestBed.createComponent(FingerboardCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
