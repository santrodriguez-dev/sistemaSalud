import { Component, OnInit } from '@angular/core';
import { MedicalCenter } from './models/medicalCenter';
import { MedicalCentersService } from './services/medical-centers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.component.html',
  styleUrls: ['./medical-centers.component.scss']
})
export class MedicalCentersComponent implements OnInit {

  medicalCenters: MedicalCenter[] = [];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicalCentersService: MedicalCentersService) {
    this.getAllMedicalCenters();
  }

  ngOnInit() { }

  getAllMedicalCenters() {
    this.medicalCentersService.getAll().subscribe(medicalCenters => {
      this.medicalCenters = medicalCenters;
    });
  }

  selectMedicalCenter(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

}
