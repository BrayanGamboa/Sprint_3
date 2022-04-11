-- DROP DATABASE IF EXISTS semillero_sas;
-- CREATE DATABASE semillero_sas;
-- USE semillero_sas;
-- Eliminar
DROP TABLE IF EXISTS vehiculo;

DROP TABLE IF EXISTS linea;

DROP TABLE IF EXISTS marca;

DROP TABLE IF EXISTS marca;

CREATE TABLE marca(
    id_marca INT(6) AUTO_INCREMENT,
    nombre
    SET
        (
            "Mazda",
            "Toyota",
            "Chevrolet",
            "Suzuki",
            "Volkswagen",
            "Audi",
            "BMW",
            "Ford",
            "Mercedes-Benz",
            "Tesla"
        ) NOT NULL UNIQUE,
        descripcion TEXT,
        estado
    SET
        ("S", "N") NOT NULL,
        CONSTRAINT `pk_id_marca` PRIMARY KEY (id_marca)
);

DROP TABLE IF EXISTS linea;

CREATE TABLE linea(
    id_linea INT(6) AUTO_INCREMENT,
    descripcion VARCHAR(200),
    estado
    SET
        ("S", "N") NOT NULL,
        id_marca INT(6) NOT NULL,
        CONSTRAINT `pk_id_linea` PRIMARY KEY (id_linea),
        CONSTRAINT `fk_marca_linea` FOREIGN KEY (id_marca) REFERENCES marca(id_marca)
);

DROP TABLE IF EXISTS vehiculo;

CREATE TABLE vehiculo(
    num_placa VARCHAR(6),
    num_modelo INT(30) NOT NULL UNIQUE,
    fch_vence_seg DATE NOT NULL,
    fch_vence_tecno DATE NOT NULL,
    marca INT(6) NOT NULL,
    url_img VARCHAR(300),
    CONSTRAINT `pk_placa_vehiculo` PRIMARY KEY (num_placa),
    CONSTRAINT `fk_marca_vehiculo` FOREIGN KEY (marca) REFERENCES linea(id_linea)
);

SHOW TABLES;

INSERT INTO
    marca (nombre, descripcion, estado)
VALUES
    (
        "Mazda",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Toyota",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Ford",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Suzuki",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "N"
    ),
    (
        "Chevrolet",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Volkswagen",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Audi",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "BMW",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),
    (
        "Mercedes-Benz",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    ),(
        "Tesla",
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S"
    );

SELECT
    *
FROM
    marca;

INSERT INTO
    linea (descripcion, estado, id_marca)
VALUES
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        1
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        2
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        3
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        4
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        5
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        6
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        7
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        8
    ),
    (
        "Lorem sit amet consectetur adipisicing elit. Reprehenderit, eos!",
        "S",
        9
    );

SELECT
    *
FROM
    linea;