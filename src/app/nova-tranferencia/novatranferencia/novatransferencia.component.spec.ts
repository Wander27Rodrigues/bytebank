import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatranferenciaComponent } from './novatransferencia.component';

describe('NovatranferenciaComponent', () => {
  let component: NovatranferenciaComponent;
  let fixture: ComponentFixture<NovatranferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovatranferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatranferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
