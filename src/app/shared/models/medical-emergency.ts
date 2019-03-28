import { Patient } from './patient';
import { MedicalCenter } from './medical-center';

export class MedicalEmergency {
    id: number;
    patient_id: number;
    doctor_id: number;
    medical_center_id: number;
    priority: string;
    state: string;
    photo: string;
    patient_description: string;
    doctor_description: string;
    address: string;
    coordLat: number;
    coordLong: number;
    patient?: Patient;
    medicalCenter?: MedicalCenter;
    createdAt?: Date;
    updatedAt?: Date;
}
