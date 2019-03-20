import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSolicitudComponent } from './info-solicitud.component';

describe('InfoSolicitudComponent', () => {
  let component: InfoSolicitudComponent;
  let fixture: ComponentFixture<InfoSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
