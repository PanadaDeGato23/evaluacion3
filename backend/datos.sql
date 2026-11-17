SET NAMES utf8mb4;
DROP DATABASE IF EXISTS gatos;
CREATE DATABASE gatos CHARACTER SET utf8mb4;
USE gatos;

CREATE TABLE gato_pelaje (
  pelaje_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL
);

CREATE TABLE gato_razas (
  raza_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  descripcion TEXT,
  pelaje_id INT NOT NULL,
  CONSTRAINT fk_gato_pelaje
    FOREIGN KEY (pelaje_id) REFERENCES gato_pelaje(pelaje_id)
);

INSERT INTO gato_pelaje (nombre) VALUES
  ("Corto"),
  ("Largo"),
  ("Medio"),
  ("Ondulado"),
  ("Sin pelaje");

INSERT INTO gato_razas (nombre, descripcion, pelaje_id) VALUES
  -- Pelaje Corto
  ("American Shorthair", "Gato americano de pelaje corto y carácter tranquilo", 1),
  ("American Wirehair", "Gato americano de pelo áspero y rizado", 1),
  ("British Shorthair", "Gato robusto de cara redonda y pelaje denso, de carácter calmado", 1),
  ("Siamese", "Gato esbelto de ojos azules y puntas oscuras, muy vocal y sociable", 1),
  ("Abyssinian", "Gato activo y curioso de pelaje con aspecto salvaje", 1),
  ("Bengal", "Gato de manchas parecidas a un leopardo, enérgico e inteligente", 1),
  ("Burmese", "Gato de cuerpo compacto y pelaje sedoso, muy apegado a las personas", 1),
  ("Bombay", "Gato de pelaje negro brillante que recuerda a una pantera en miniatura", 1),
  ("Russian Blue", "Gato de pelaje gris azulado y ojos verdes, reservado y elegante", 1),
  ("Ocicat", "Gato de manchas que parece salvaje, pero de trato dócil y sociable", 1),
  ("Oriental Shorthair", "Gato de orejas grandes y cuerpo estilizado, activo y conversador", 1),
  ("Egyptian Mau", "Gato de manchas naturales, conocido por ser uno de los más veloces", 1),
  ("Chartreux", "Gato francés de pelaje gris azulado y sonrisa característica", 1),
  ("Korat", "Gato tailandés de pelaje plateado y cara en forma de corazón", 1),
  ("Singapura", "Una de las razas más pequeñas, curiosa y de pelaje corto y suave", 1),
  ("Manx", "Gato sin cola o de cola muy corta, ágil y buen saltador", 1),
  ("Scottish Fold", "Gato de orejas dobladas hacia adelante y expresión dulce", 1),
  ("Exotic Shorthair", "Versión de pelo corto del persa, de cara chata y carácter tranquilo", 1),
  ("Japanese Bobtail", "Gato japonés de cola corta parecida a un pompón", 1),
  ("Havana Brown", "Gato de pelaje marrón chocolate uniforme, juguetón y cariñoso", 1),
  ("Burmilla", "Gato de pelaje plateado con puntas oscuras, tranquilo y juguetón", 1),
  -- Pelaje Largo
  ("American Bobtail", "Gato americano de cola corta y aspecto esponjoso", 2),
  ("Balinese", "Gato elegante de pelo sedoso y ojos azules", 2),
  ("Birman", "Gato de patas blancas, ojos azules y trato dulce", 2),
  ("Persian", "Gato de cara chata y pelaje largo y denso, muy tranquilo", 2),
  ("Maine Coon", "Una de las razas más grandes, de pelaje espeso y carácter amable", 2),
  ("Ragdoll", "Gato grande de ojos azules que se relaja al ser cargado", 2),
  ("Norwegian Forest Cat", "Gato de origen nórdico con pelaje doble, resistente al frío", 2),
  ("Siberian", "Gato de pelaje espeso e impermeable, fuerte y juguetón", 2),
  ("Turkish Angora", "Gato de pelaje largo y sedoso, elegante y muy activo", 2),
  ("Himalayan", "Cruce de persa y siamés, de pelaje largo y ojos azules", 2),
  ("Ragamuffin", "Gato grande y afectuoso de pelaje suave y abundante", 2),
  ("Somali", "Gato de pelaje semilargo y cola abundante, similar a un zorro", 2),
  ("Turkish Van", "Gato de origen turco con pelaje blanco, al que le gusta el agua", 2),
  ("Nebelung", "Gato de pelaje largo gris azulado, tímido y muy leal", 2),
  -- Pelaje Medio
  ("American Curl", "Gato americano de orejas curvadas hacia atrás", 3),
  ("Snowshoe", "Gato de patas blancas y ojos azules, sociable y vocal", 3),
  ("Tonkinese", "Cruce de siamés y burmés, de pelaje sedoso y carácter sociable", 3),
  ("Pixiebob", "Gato de aspecto de lince, de gran tamaño y carácter dócil", 3),
  ("Munchkin", "Gato de patas cortas, muy juguetón y curioso", 3),
  -- Pelaje Ondulado
  ("Cornish Rex", "Gato delgado de pelaje corto y ondulado, muy activo", 4),
  ("Devon Rex", "Gato de orejas grandes y pelaje suave y ondulado, travieso y cariñoso", 4),
  ("Selkirk Rex", "Gato robusto de pelaje rizado y denso, tranquilo y afectuoso", 4),
  ("LaPerm", "Gato de pelaje rizado en forma de bucles, dulce y cariñoso", 4),
  -- Pelaje Sin pelaje
  ("Bambino", "Gato sin pelaje y de patas cortas", 5),
  ("Sphynx", "Gato sin pelo de piel arrugada, muy sociable y amante del calor", 5),
  ("Donskoy", "Gato ruso casi sin pelo, de piel suave y carácter cariñoso", 5),
  ("Peterbald", "Gato ruso de cuerpo esbelto y poco pelo, inteligente y sociable", 5),
  ("Elf", "Gato sin pelo de orejas curvadas hacia atrás, parecido a un duende", 5);
