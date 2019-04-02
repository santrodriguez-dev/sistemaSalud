import { MedicalEmergency } from "src/app/shared/models";

export class MedicalCenter {
  id: number;
  name: string;
  address: string;
  description: string;
  phone: string;
  photo: string;
  city: string;
  coordLat: number;
  coordLong: number;
  image?: string;
  selected?: boolean;
  near?: boolean;
  medicalEmergencies?: MedicalEmergency[];
}
