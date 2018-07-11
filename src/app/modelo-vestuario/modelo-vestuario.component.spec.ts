import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVestuarioComponent } from './modelo-vestuario.component';

describe('ModeloVestuarioComponent', () => {
  let component: ModeloVestuarioComponent;
  let fixture: ComponentFixture<ModeloVestuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloVestuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVestuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
