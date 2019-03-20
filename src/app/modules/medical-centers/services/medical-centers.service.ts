import { Injectable } from '@angular/core';
import { MedicalCenter } from '../models/medicalCenter';

@Injectable({
  providedIn: 'root'
})
export class MedicalCentersService {

  constructor() { }

  getAll(): MedicalCenter[] {
    return [
      {
        id: 1,
        name: 'Clínica Partenón',
        address: 'Cl. 74 #7665',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 2,
        name: 'Hospital Infantil Universitario de San José.',
        address: 'Cra. 52 #67a-71',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 3,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 4,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 5,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 6,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 7,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 8,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 1,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
      {
        id: 1,
        name: 'Hospital infantil',
        address: 'Cra 118 n 78 a 45',
        city: 'Bogotá',
        coordLat: '25.2554',
        coordLong: '25.2554',
        phone: '3025848',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.'
      },
    ];
  }

}
