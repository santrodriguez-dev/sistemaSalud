import { Patient } from './patient';

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
    createdAt?: Date;
    updatedAt?: Date;
}
