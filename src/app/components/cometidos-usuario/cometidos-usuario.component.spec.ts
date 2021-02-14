import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CometidosUsuarioComponent } from './cometidos-usuario.component';

describe('CometidosUsuarioComponent', () => {
  let component: CometidosUsuarioComponent;
  let fixture: ComponentFixture<CometidosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CometidosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CometidosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
