# Backend de Chat en Streaming

Este proyecto es un backend para un sistema de chat en streaming, construido con Node.js utilizando una arquitectura hexagonal (puertos y adaptadores). La API incluye autenticación de usuarios y un sistema de chat en tiempo real utilizando Socket.io.

src/ ├── application/ 
     │ ├── services/ 
     │ │ └── AuthService.js 
     │ │ └── ChatService.js 
     ├── domain/ 
     │ ├── models/ 
     │ │ └── Message.js 
     │ │ └── User.js 
     │ ├── repositories/ 
     │ │ └── MessageRepository.js 
     │ │ └── UserRepository.js 
     ├── infrastructure/ 
     │ ├── config/ 
     │ │ └── connectMongo.js 
     │ ├── middleware/ 
     │ │ └── auth.js 
     │ ├── routes/ 
     │ │ └── authRoutes.js 
     │ │ └── chatRoutes.js 
     │ ├── server.js 
     │ ├── socket.js 
     ├── adapters/ 
     │ ├── controllers/ 
     │ │ └── AuthController.js 
     │ │ └── ChatController.js 
     │ ├── repositories/ 
     │ │ └── MessageRepositoryImpl.js 
     │ │ └── UserRepositoryImpl.js


## Requisitos

- Node.js (v23)
- MongoDB

## Instalación

1. Clona el repositorio:

`git clone https://github.com/freiman-uribe/chat-back.git
cd chat-back`

2. Instala las dependencias:
 `npm install`

3. Configura las variables de entorno:
    Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

`PORT=3000
MONGO_URI=mongodb://localhost:27017/tu-base-de-datos`

4. Inicia el servidor:
`npm run dev`

## Endpoints

### Autenticación

- `POST /api/auth/register`: Registra un nuevo usuario.
- `POST /api/auth/login`: Inicia sesión y obtiene un token JWT.

### Chat

- `GET /api/chat/messages`: Obtiene todos los mensajes (requiere autenticación).
- `POST /api/chat/messages`: Envía un nuevo mensaje (requiere autenticación).

## Middleware

- `auth.js`: Middleware de autenticación para proteger rutas.

## Servicios

- `AuthService.js`: Lógica de negocio para la autenticación.
- `ChatService.js`: Lógica de negocio para el chat.

## Controladores

- `AuthController.js`: Controlador para manejar las solicitudes de autenticación.
- `ChatController.js`: Controlador para manejar las solicitudes de chat.

## Repositorios

- `UserRepository.js`: Interfaz para el repositorio de usuarios.
- `MessageRepository.js`: Interfaz para el repositorio de mensajes.
- `UserRepositoryImpl.js`: Implementación del repositorio de usuarios.
- `MessageRepositoryImpl.js`: Implementación del repositorio de mensajes.
    