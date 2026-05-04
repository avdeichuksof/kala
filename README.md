# KaLa 🌸
 
Catálogo online para **KaLa**, emprendimiento de accesorios y ropa hechos a mano: pulseras, collares, manoplas, charms, llaveros y más.
 
## ¿Qué permite hacer?
 
- Explorar el catálogo completo o filtrar por categoría
- Ver los productos disponibles con foto y precio
- Agregar productos a un carrito
- Hacer el pedido directamente por WhatsApp con la lista de productos y el total
## Tecnologías
 
- **React** — interfaz de usuario
- **React Router** — navegación entre rutas
- **Firebase Firestore** — base de datos de productos
- **Cloudinary** — almacenamiento de imágenes
- **Context API** — manejo del estado del carrito
- **WhatsApp Click to Chat API** — envío del pedido
## Correr el proyecto localmente
 
```bash
git clone https://github.com/tu-usuario/kala.git
cd kala
npm install
npm start
```
 
Necesitás crear un archivo `.env` en la raíz con tus credenciales de Firebase:
 
```
REACT_APP_NUMERO= whatsapp_number
REACT_APP_API_KEY= your_firecrawl_api_key
REACT_APP_SENDER_ID= your_firecrawl_sender_id
REACT_APP_APP_ID= your_firecrawl_app_id
```