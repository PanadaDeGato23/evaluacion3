# Pagina Web de catalogo de gatos.

## Como ejecutarlo

1. **Crear la base de datos**
   ```
   Ejecutar en MySQL
   source C:/Users/.../proyecto-gatos/backend/datos.sql
   ```
2. **Configurar el backend**
   ```
   cd backend
   cp .env.example .env     # editar .env con tu usuario y clave de MySQL
   npm install
   npm start
   ```
   Debe mostrar `Servidor escuchando en el puerto 3000`. Prueba `http://localhost:3000/api/razas`.
3. **Abrir la pagina web**: abrir `frontend/index.html` con Live Server.
