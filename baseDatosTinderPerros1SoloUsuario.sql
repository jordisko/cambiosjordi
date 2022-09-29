
DROP SCHEMA IF EXISTS `basedatostinderperros2` ;

CREATE SCHEMA IF NOT EXISTS `basedatostinderperros2`;

USE `basedatostinderperros2` ;

DROP TABLE IF EXISTS `basedatostinderperros2`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(15) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL,
  `tipoUsuario` VARCHAR(10) NULL,
  `descripcion` VARCHAR(140) NULL DEFAULT NULL,
  `etiquetaPersona1` TINYINT NULL DEFAULT NULL, #FAMILIA 
  `etiquetaPersona2` TINYINT NULL DEFAULT NULL,
  `etiquetaPersona3` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota1` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota2` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota3` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota4` TINYINT NULL DEFAULT NULL,
  `etiquetaMascota5` TINYINT NULL DEFAULT NULL,
  `numeroTelefono` INT NULL DEFAULT NULL,
  `fotoPerfil` VARCHAR(255) NULL,
  `fechaNacimiento` DATE NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(5) NULL DEFAULT NULL,
  `nombreUsuario` VARCHAR(15) NULL,
  `contrasenya` VARCHAR(15) NULL,
  `quebusco` VARCHAR(45) DEFAULT NULL,
  `correoElectronico` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombreUsuario_UNIQUE` (`nombreUsuario` ASC) VISIBLE);

DROP TABLE IF EXISTS `basedatostinderperros2`.`Likes` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Likes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarioid1` INT NOT NULL,
  `usuarioid2` INT NOT NULL,
  `estado` tinyint NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuarios_has_Usuarios_usuarioid2_idx` (`usuarioid2` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios_usuarioid1idx` (`usuarioid1` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid1`
    FOREIGN KEY (`usuarioid1`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid2`
    FOREIGN KEY (`usuarioid2`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO basedatostinderperros2.Usuarios(nombre,apellido,tipoUsuario,descripcion,etiquetaPersona1,etiquetaPersona2 ,etiquetaPersona3, etiquetaMascota1,etiquetaMascota2,etiquetaMascota3,etiquetaMascota4,etiquetaMascota5, numeroTelefono ,fotoPerfil,fechaNacimiento ,direccion ,codigoPostal,nombreUsuario,contrasenya, quebusco,correoElectronico) VALUES
("jordi","perez","persona","hola buenos dias",0,1,1,1,0,1,0,0,687078172,"flskdjflsj","1980-08-08","calle 1234",08031,"jordi123","contrasenya12","gato","jordicampos.97@gmail.com"),
("bobby","perez","gato","muy amigable",1,0,1,1,0,1,0,1,687078173,"fdsfdsf","2010-09-09","calle 12314214",08031,"bobby123","contrasenyaa12","persona","bobby123@gmail.com"),
("hector","fdsfd","gato","hola buenos dias",1,0,1,1,0,1,0,1,687078172,"flskdjflsj","1980-08-08","calle 1234",08031,"jordi12","contrasenya12","persona","jordicampos.97@gmail.com"),
("jordi","perez","persona","hola buenos dias",1,0,1,1,0,1,0,1,687078172,"flskdjflsj","1980-08-08","calle 1234",08031,"jordi23","contrasenya2","gato","jordicampos.97@gmail.com");

INSERT INTO basedatostinderperros2.Likes(usuarioid1,usuarioid2,estado) VALUES
(1,2,1),
(2,1,1),
(1,3,1),
(1,4,0),
(4,3,1),
(3,2,0);

USE basedatostinderperros2;
## NO SE QUE HACE ESTO SELECT  usuarioid2 IN (SELECT usuarioid1 FROM likes WHERE usuarioid2 = 1 AND estado=1) from likes where estado=1 AND usuarioid1=1;
SELECT id,nombre,fotoPerfil from usuarios WHERE id = (SELECT  usuarioid2 from likes where estado=1 AND usuarioid1=1 AND usuarioid2 IN (SELECT usuarioid1 FROM likes WHERE usuarioid2 =1  AND estado=1));
#SELECT id from 

SELECT id ,tipoUsuario,fotoPerfil,nombre,fechaNacimiento,descripcion, etiquetaPersona1,etiquetaPersona2 ,etiquetaPersona3, etiquetaMascota1,etiquetaMascota2,etiquetaMascota3,etiquetaMascota4,etiquetaMascota5 from usuarios where id not in (SELECT usuarioid2 from likes where usuarioid1=3) AND id<>3 AND tipoUsuario = (SELECT quebusco from usuarios where id =3)AND quebusco=(SELECT tipoUsuario from usuarios where id =3) AND codigoPostal =(SELECT codigoPostal from usuarios where id =3) ;
#SELECT id,@a:=0,etiquetaPersona1,etiquetaPersona2,etiquetaPersona3,etiquetaMascota1,etiquetaMascota2,etiquetaMascota3,etiquetaMascota4,etiquetaMascota5  from usuarios where id in (SELECT id from usuarios where id not in (SELECT usuarioid2 from likes where usuarioid1=3) AND id<>3 AND tipoUsuario = (SELECT quebusco from usuarios where id =3) AND codigoPostal =(SELECT codigoPostal from usuarios where id =3));
#if etiquetaPersona1 = (SELECT etiquetaPersona1 from usuarios where id = 3
##CASE WHEN etiquetaPersona1 =(SELECT etiquetaPersona1 from usuarios where id =3) THEN SET @prioridad=1likes