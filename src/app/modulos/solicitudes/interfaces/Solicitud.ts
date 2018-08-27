import { Paciente } from '../../pacientes/interfaces/paciente';

export interface Solicitud {
    id: number;
    paciente_id: string;
    categoria_id: number;
    clasificacion_id: number;
    descripcion: string;
    categoria?: Categoria;
    clasificacion?: Clasificacion;
    paciente?: Paciente;
    createdAt: Date;
}

export interface Clasificacion {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Categoria {
    id: number;
    nombre: string;
    descripcion: string;
}
