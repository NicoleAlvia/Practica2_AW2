//crear tabla vehiculo 
CREATE TABLE vehiculo (
  id_vehiculo SERIAL PRIMARY KEY,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  placa VARCHAR(20) NOT NULL UNIQUE,
  color VARCHAR(20) NOT NULL,
  capacidad_pasajeros INTEGER NOT NULL
);

//crear tabla espacio parqueo
CREATE TABLE espacio_parqueo (
  id_espacio SERIAL PRIMARY KEY,
  ubicacion VARCHAR(100) NOT NULL,
  tipo_vehiculo VARCHAR(20) NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'libre'
);

// crear tabla parqueo 
CREATE TABLE parqueo (
  id_parqueo SERIAL PRIMARY KEY,
  id_vehiculo INTEGER NOT NULL REFERENCES vehiculo(id_vehiculo),
  id_espacio INTEGER NOT NULL REFERENCES espacio_parqueo(id_espacio),
  fecha_hora_ingreso TIMESTAMP NOT NULL,
  fecha_hora_salida TIMESTAMP DEFAULT NULL
);
