import { ClinicHistory } from './clinic-history';

export class Patient {
    id: number;
    email: string;
    password: string;
    identification: string;
    name: string;
    birthdate: Date;
    phone: string;
    address: string;
    photo: string;
    clinicHistories?: ClinicHistory[];
}
