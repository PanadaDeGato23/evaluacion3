require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

const origenesPermitidos = [
  process.env.FRONTEND_URL,
  "http://127.0.0.1:5500",
  "http://localhost:5500",
  "http://127.0.0.1:5501",
  "http://localhost:5501"
].filter(Boolean);

app.use(cors({
  origin: function (origen, callback) {
    if (!origen || origenesPermitidos.includes(origen)) {
      return callback(null, true);
    }
    return callback(new Error("Origen no permitido por CORS"));
  }
}));
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/", (req, res) => {
  res.send("Backend de consulta MySQL funcionando.");
});

app.get("/api/razas", async (req, res) => {
  try {
    const consulta = `
      SELECT
        r.raza_id,
        r.nombre,
        r.descripcion,
        p.nombre AS pelaje
      FROM gato_razas AS r
      INNER JOIN gato_pelaje AS p
        ON r.pelaje_id = p.pelaje_id
      ORDER BY r.nombre;
    `;
    const [filas] = await pool.query(consulta);
    res.json(filas);
  } catch (error) {
    console.error("Error al consultar razas:", error.message);
    res.status(500).json({ mensaje: "Error al consultar la base de datos." });
  }
});

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});
