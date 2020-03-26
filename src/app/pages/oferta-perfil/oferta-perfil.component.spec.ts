import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaPerfilComponent } from './oferta-perfil.component';

describe('OfertaPerfilComponent', () => {
  let component: OfertaPerfilComponent;
  let fixture: ComponentFixture<OfertaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
