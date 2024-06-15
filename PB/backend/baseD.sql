-- Tabla de productos
create table if not exists productos (
    id integer primary key autoincrement,
    nombre varchar(50),
    descripcion varchar(50),
    precio float,
    stock integer
);

insert into productos (nombre, descripcion, precio, stock) values('camiseta','playera unisex basica', 239.00, 50);
insert into productos (nombre, descripcion, precio, stock) values('camisa','camisa de lino unisex', 499.00, 50);
insert into productos (nombre, descripcion, precio, stock) values('pantalón', 'pantalón de mezclilla tipo baggy', 399.00, 50);
insert into productos (nombre, descripcion, precio, stock) values('short', 'short de vestir corte chino', 299.00, 50);
insert into productos (nombre, descripcion, precio, stock) values('cinturon', 'cinturon de cuero color café', 199.00, 50);

-- Tabla de clientes
create table if not exists clientes(
    id integer primary key autoincrement,
    nombre varchar(50),
    direccion varchar(50),
    correo varchar(50),
    telefono varchar(10)
);

insert into clientes(nombre, direccion, correo, telefono) values('Juan','Constelaciones 2', 'JuanP@hotmail.com', '9381456579');
insert into clientes(nombre, direccion, correo, telefono) values('Fernando','Constelaciones 2','Ferf@hotmail.com', '9381234565');
insert into clientes(nombre, direccion, correo, telefono) values('María','Constelaciones 2','Mariafr@hotmail.com', '9384136576');
insert into clientes(nombre, direccion, correo, telefono) values('Fernanda','Constelaciones 2','Fernandat@hotmail.com', '9387658990');
insert into clientes(nombre, direccion, correo, telefono) values('Rodolfo','Constelaciones 2','RodolfoD@hotmail.com', '9381854321');

-- Tabla de empleados
create table if not exists empleados(
    id integer primary key autoincrement,
    nombre varchar(50),
    apellido varchar(50),
    puesto varchar(50),
    salario float,
    fecha date
);

insert into empleados(nombre, apellido, puesto, salario, fecha) values('Dennis','Perez', 'Gerente', 8000.00, '2024-04-01');
insert into empleados(nombre, apellido, puesto, salario, fecha) values('Eduardo','Rodriguez', 'Vendedor', 6000.00, '2024-04-01');
insert into empleados(nombre, apellido, puesto, salario, fecha) values('Jose','Alonso', 'Vendedor', 6000.00, '2024-04-01');
insert into empleados(nombre, apellido, puesto, salario, fecha) values('Monse','Villanueva', 'Inventarista', 6000.00, '2024-04-01');

-- Tabla de ventas
create table if not exists ventas(
    id integer primary key autoincrement,
    fecha date,
    total float
);

insert into ventas(fecha, total) values('2024-04-01', 877.00);
insert into ventas(fecha, total) values('2024-04-01', 638.00);
insert into ventas(fecha, total) values('2024-04-01', 1635.00);
