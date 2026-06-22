# Operations Plan

## Objetivo
Documentar el estado actual de la aplicación, los pasos necesarios para desplegarla y las tareas operativas pendientes.

## Estado actual
- Aplicación compilada con `npm run build`.
- Servicios de aplicación validados con pruebas unitarias.
- Pruebas de integración documentadas pero aún no implementadas.
- Arquitectura hexagonal con controladores HTTP, servicios de aplicación e infraestructura en memoria.

## Requisitos para despliegue
- Node.js 20+ instalado.
- Dependencias instaladas con `npm install`.
- Opcional: configurar un entorno de producción con un servidor web delante del servicio Fastify.

## Pasos de despliegue
1. Ejecutar `npm install`.
2. Compilar el proyecto: `npm run build`.
3. Iniciar la aplicación: `npm start`.
4. Verificar que el endpoint raíz o endpoints principales respondan correctamente.

## Monitoreo y mantenimiento
- Controlar el uso de CPU/memoria del proceso Node.js.
- Reiniciar el servicio cuando cambie el código y vuelva a compilar.
- Añadir un health check HTTP en el futuro para verificar la disponibilidad.

## Siguientes tareas operativas
- Implementar pruebas de integración reales en `tests/integration`.
- Añadir instrumentación de logs y métricas.
- Preparar scripts de despliegue automatizado si se va a mover a producción.
