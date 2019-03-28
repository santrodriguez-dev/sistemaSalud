import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMedicalEmergencyDialogComponent } from './manage-medical-emergency-dialog.component';

describe('ManageMedicalEmergencyDialogComponent', () => {
  let component: ManageMedicalEmergencyDialogComponent;
  let fixture: ComponentFixture<ManageMedicalEmergencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMedicalEmergencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMedicalEmergencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
