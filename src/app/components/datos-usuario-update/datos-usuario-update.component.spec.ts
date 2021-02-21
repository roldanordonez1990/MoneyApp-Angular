import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioUpdateComponent } from './datos-usuario-update.component';

describe('DatosUsuarioUpdateComponent', () => {
  let component: DatosUsuarioUpdateComponent;
  let fixture: ComponentFixture<DatosUsuarioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosUsuarioUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsuarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
