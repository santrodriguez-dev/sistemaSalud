import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.component.html',
  styleUrls: ['./medical-centers.component.scss']
})
export class MedicalCentersComponent implements OnInit {

  medicalCenters: MedicalCenter[] = [
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
    {
      name: 'Hospital infantil',
      address: 'Cra 118 n 78 a 45',
      city: 'Bogota',
      coordLat: '25.2554',
      coordLong: '25.2554',
      phone: '3025848'
    },
  ];

  constructor() { }


  ngOnInit() {
  }

}

class MedicalCenter {
  name: string;
  address: string;
  phone: string;
  city: string;
  coordLat: string;
  coordLong: string;
}
