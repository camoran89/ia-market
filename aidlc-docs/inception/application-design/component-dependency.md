# Application Design - Component Dependency

## Dependency Overview
Este documento describe las relaciones entre componentes y los patrones de comunicación en el sistema.

## Component Dependency Matrix

- **Web Application UI** → **Chat Service**
- **Web Application UI** → **Search Service**
- **Web Application UI** → **Admin Service**
- **Web Application UI** → **User Service**
- **Web Application UI** → **Analytics Service**
- **Chat Service** → **AI Intent Engine**
- **Chat Service** → **Order Service**
- **Chat Service** → **Search Service**
- **Chat Service** → **Receipt Service**
- **Chat Service** → **Subscription Service**
- **Order Service** → **Receipt Service**
- **Order Service** → **Notification Service**
- **Order Service** → **Storage Component**
- **Order Service** → **User Service**
- **Receipt Service** → **Storage Component**
- **Receipt Service** → **Notification Service**
- **Subscription Service** → **User Service**
- **Search Service** → **Location Provider**
- **Admin Service** → **User Service**
- **Notification Service** → **Storage Component**
- **Analytics Service** → **User Service**

## Communication Patterns
- **Request/Response**: La UI interactúa con servicios backend mediante APIs REST o WebSocket.
- **Orquestación por Chat Service**: El Chat Service envía solicitudes a otros servicios según las intenciones del usuario.
- **Eventos de dominio**: El Order Service publica eventos de estado que pueden ser consumidos por Notification Service y Analytics Service.
- **Almacenamiento compartido**: El Storage Component sirve como respaldo persistente para comprobantes y archivos.
- **Autorización centralizada**: El User Service se utiliza como autoridad de seguridad para permisos y roles.

## Data Flow
1. El comprador envía un mensaje desde la **Web Application UI**.
2. El mensaje se procesa en el **Chat Service** y se envía al **AI Intent Engine**.
3. Según la intención, el **Chat Service** invoca:
   - **Search Service** para resultados geoespaciales.
   - **Order Service** para crear o actualizar transacciones.
   - **Receipt Service** para validar comprobantes.
   - **Subscription Service** para validar la activación del vendedor.
4. El **Order Service** puede coordinar con **Notification Service** para avisar al vendedor.
5. El **Analytics Service** registra eventos relevantes.

## External Systems
- **Location Provider**: Servicios externos de mapas/geocodificación.
- **AI Provider**: Motor de IA conversacional.
- **Notification Provider**: Email, web push, SMS u otros canales.
- **Storage Provider**: Almacenamiento de archivos y comprobantes.
