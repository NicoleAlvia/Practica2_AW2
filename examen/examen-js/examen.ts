// Definición de la entidad Entorno
interface Entorno {
    id: number;
    descripcion: string;
}

// Definición de la entidad Vehículo con relación a Entorno
interface Vehiculo {
    id: number;
    descripcion: string;
    placa: string;
    color: string;
    id_entorno: number;  
}

// Definición de la entidad Espacio_parqueo con relación a Entorno
interface Espacio_parqueo {
    id: number;
    descripcion: string;
    id_entorno: number;  
}

// Definición de la entidad Parquear con relación a Entorno
interface Parquear {
    id: number;
    id_vehiculo: number;
    id_parqueo: number;
    fecha_entrada: Date;
    hora_entrada: Date;
    fecha_salida: Date;
    hora_salida: Date;
    id_entorno: number;  
}

// Lista de entornos predefinidos
const entornos: Entorno[] = [
    { id: 1, descripcion: 'Desarrollo' },
    { id: 2, descripcion: 'Pruebas' },
    { id: 3, descripcion: 'Producción' }
];

// Ejemplo de Vehículo relacionado con un Entorno de Pruebas
const vehiculoPruebas: Vehiculo = {
    id: 2,
    descripcion: 'Vehículo de pruebas',
    placa: 'XYZ789',
    color: 'Azul',
    id_entorno: 2  
};

// Ejemplo de Espacio_parqueo relacionado con un Entorno de Pruebas
const espacioParqueoPruebas: Espacio_parqueo = {
    id: 2,
    descripcion: 'Espacio de parqueo B2',
    id_entorno: 2  
};

// Crear un nuevo registro de Parquear relacionado con el entorno de Pruebas
const nuevoParquear: Parquear = {
    id: 2,
    id_vehiculo: vehiculoPruebas.id,
    id_parqueo: espacioParqueoPruebas.id,
    fecha_entrada: new Date('2024-05-28T09:00:00'),
    hora_entrada: new Date('2024-05-28T09:00:00'),
    fecha_salida: new Date('2024-05-28T17:00:00'),
    hora_salida: new Date('2024-05-28T17:00:00'),
    id_entorno: 2  
};

console.log('Entornos:', entornos);
console.log('Vehículo de Pruebas:', vehiculoPruebas);
console.log('Espacio de Parqueo de Pruebas:', espacioParqueoPruebas);
console.log('Nuevo Parquear:', nuevoParquear);






