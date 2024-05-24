-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS SistemaFarmacia;
USE SistemaFarmacia;

-- Crear la tabla de Medicamentos
CREATE TABLE IF NOT EXISTS Medicamentos (
    ID_Medicamento INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Precio DECIMAL(5, 2),
    Stock INT
);

-- Insertar registros en la tabla de Medicamentos
INSERT INTO Medicamentos (ID_Medicamento, Nombre, Precio, Stock) VALUES
(1, 'Paracetamol', 2.50, 100),
(2, 'Ibuprofeno', 3.00, 50),
(3, 'Aspirina', 1.75, 200),
(4, 'Omeprazol', 5.00, 30),
(5, 'Amoxicilina', 4.50, 75);

-- Crear la tabla de Clientes
CREATE TABLE IF NOT EXISTS Clientes (
    ID_Cliente INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Edad INT
);

-- Insertar registros en la tabla de Clientes
INSERT INTO Clientes (ID_Cliente, Nombre, Apellido, Edad) VALUES
(1, 'Juan', 'Pérez', 34),
(2, 'María', 'García', 28),
(3, 'Luis', 'Hernández', 45),
(4, 'Ana', 'Rodríguez', 22),
(5, 'Carlos', 'López', 55);

-- Crear la tabla de Ventas
CREATE TABLE IF NOT EXISTS Ventas (
    ID_Venta INT PRIMARY KEY,
    ID_Cliente INT,
    ID_Medicamento INT,
    Cantidad INT,
    Fecha DATE,
    FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente),
    FOREIGN KEY (ID_Medicamento) REFERENCES Medicamentos(ID_Medicamento)
);

-- Insertar registros en la tabla de Ventas
INSERT INTO Ventas (ID_Venta, ID_Cliente, ID_Medicamento, Cantidad, Fecha) VALUES
(1, 1, 2, 2, '2024-05-01'),
(2, 2, 3, 1, '2024-05-03'),
(3, 1, 1, 3, '2024-05-05'),
(4, 3, 4, 1, '2024-05-07'),
(5, 4, 5, 2, '2024-05-08');

-- Crear la tabla de Proveedores
CREATE TABLE IF NOT EXISTS Proveedores (
    ID_Proveedor INT PRIMARY KEY,
    Nombre_Proveedor VARCHAR(50),
    Contacto VARCHAR(20)
);

-- Insertar registros en la tabla de Proveedores
INSERT INTO Proveedores (ID_Proveedor, Nombre_Proveedor, Contacto) VALUES
(1, 'Farmalab', '555-1234'),
(2, 'SaludPlus', '555-5678'),
(3, 'MedDistribución', '555-8765'),
(4, 'FarmaDistribuidora', '555-4321'),
(5, 'GlobalMedic', '555-8763');

-- Crear la tabla de Suministros
CREATE TABLE IF NOT EXISTS Suministros (
    ID_Suministro INT PRIMARY KEY,
    ID_Proveedor INT,
    ID_Medicamento INT,
    Cantidad INT,
    Fecha_Suministro DATE,
    FOREIGN KEY (ID_Proveedor) REFERENCES Proveedores(ID_Proveedor),
    FOREIGN KEY (ID_Medicamento) REFERENCES Medicamentos(ID_Medicamento)
);

-- Insertar registros en la tabla de Suministros
INSERT INTO Suministros (ID_Suministro, ID_Proveedor, ID_Medicamento, Cantidad, Fecha_Suministro) VALUES
(1, 1, 1, 50, '2024-04-25'),
(2, 2, 2, 30, '2024-04-26'),
(3, 3, 3, 100, '2024-04-27'),
(4, 4, 4, 20, '2024-04-28'),
(5, 5, 5, 40, '2024-04-29');
