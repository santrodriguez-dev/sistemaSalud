import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetSolicitudComponent } from './bottom-sheet-solicitud.component';

describe('BottomSheetSolicitudComponent', () => {
  let component: BottomSheetSolicitudComponent;
  let fixture: ComponentFixture<BottomSheetSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
