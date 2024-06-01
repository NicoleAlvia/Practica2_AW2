BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[vehiculo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Descripcion] NVARCHAR(1000),
    [Placa] NVARCHAR(1000),
    [Color] NVARCHAR(1000),
    CONSTRAINT [vehiculo_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Espacio_parque] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Descripcion] NVARCHAR(1000),
    CONSTRAINT [espacio_parqueo_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[parqueo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fecha_entrada] DATE,
    [Fecha_salida] DATE,
    [Hora_desde] NVARCHAR(1000),
    [Hora_hasta] NVARCHAR(1000),
    CONSTRAINT [parqueo_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[espacio_parque] ADD CONSTRAINT [espacio_parqueo_vehiculoId_fkey] FOREIGN KEY ([vehiculod]) REFERENCES [dbo].[vehiculo]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[espacio_parqueo] ADD CONSTRAINT [espacio_parqueo_ParqueotaId_fkey] FOREIGN KEY ([ParqueoId]) REFERENCES [dbo].[Parqueo]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH