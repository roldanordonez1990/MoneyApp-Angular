import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosLegalesComponent } from './terminos-legales.component';

describe('TerminosLegalesComponent', () => {
  let component: TerminosLegalesComponent;
  let fixture: ComponentFixture<TerminosLegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosLegalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
