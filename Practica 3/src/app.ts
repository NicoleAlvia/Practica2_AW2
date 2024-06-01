import express from 'express';
import { PrismaClient } from '@prisma/client';
import { PORT } from './PORT';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rutas para vehiculo
app.get('/vehiculo', async (req, res) => {
    const vehiculos = await prisma.vehiculo.findMany({
        where: {
            Estado: 'Disponible', // Filtra por registros disponibles
        },
    });
    res.json(vehiculos);
});

app.post('/vehiculos', async (req, res) => {
    const newVehiculo = await prisma.vehiculo.create({
        data: {
            ...req.body,
            Estado: 'Disponible', // Establece el estado al crear una nuevo vehiculo
        },
    });
    res.json(newVehiculo);
});
app.put('/vehicolos/:id', async (req, res) => {
    const { id } = req.params;
    const updatedVehiulo = await prisma.vehiculo.update({
        where: { id: parseInt(id) },
        data: {
            Descripcion: req.body.Descripcion, // Actualiza la descripción según los datos enviados
            Placa: req.body.Placa,
            Color: req.body.Color,
            // Otros campos que desees actualizar
        },
    });
    res.json(updatedVehiulo);
});
app.delete('/vehiculo/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.vehiculo.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'No_disponible', // Establece el estado a "No disponible"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

// Rutas para Espacio_parqueo
app.get('/espacio_parqueo', async (req, res) => {
    const espacio_parqueos = await prisma.espacio_parqueo.findMany({
        where: {
            Estado: 'Ocupado', // Filtra por registros ocupado
        },
    });
    res.json(espacio_parqueos);
});

app.post('/espacio_parqueos', async (req, res) => {
    const newEspacio_parqueos = await prisma.espacio_parqueo.create({
        data: {
            ...req.body,
            Estado: 'Ocupado', // Establece el estado al crear un nuevo espacio de parqueo
        },
    });
    res.json(newEspacio_parqueos);
});

app.put('/espacio_parqueos´/:id', async (req, res) => {
    const { id } = req.params;
    const updatedEspacio_parqueos = await prisma.espacio_parqueo.update({
        where: { id: parseInt(id) },
        data: {
            id: req.body.Descripcion, 
            Descripcion: req.body.Descripcion,
        },
    });
    res.json(updatedEspacio_parqueos);
});

app.delete('/espacio_parque/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.espacio_parqueo.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'Ocupado', // Establece el estado a "Ocupado"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

// Rutas para parqueo
app.get('/parqueo', async (req, res) => {
    const parqueos = await prisma.parqueo.findMany({
        where: {
            Estado: 'habilitado', // Filtra por registros habilitados
        },
    });
    res.json(parqueos);
});

app.post('/parqueos', async (req, res) => {
    const newParqueo = await prisma.parqueo.create({
        data: {
            ...req.body,
            Estado: 'habilitado', // Establece el estado al crear un nuevo parqueo
        },
    });
    res.json(newParqueo);
});

app.put('/parqueos/:id', async (req, res) => {
    const { id } = req.params;
    const updateZParqueo = await prisma.parqueo.update({
        where: { id: parseInt(id) },
        data: {
            VehiculoId: req.body.VehiculoId,
            Espacio_parqueoId: req.body.Espacio_parqueoId,
            Fecha_desde: req.body.Fecha, 
            Fecha_hasta: req.body.Fecha, 
            Hora_desde: req.body.Hora,
            Hora_hasta: req.body.Hora,      
        },
    });
    res.json(updateZParqueo);
});

app.delete('/parqueos/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.parqueo.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'habilitado', // Establece el estado a "habilitado"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));