# Integration Test Instructions

## Alcance
- Validar que los controladores HTTP están conectados con los servicios de aplicación.
- Cubrir rutas clave de `buyer`, `chat`, `search`, `receipt`, `seller`, `subscription`, `admin`, `auth`.

## Recomendación
- Usar una prueba rápida con `supertest` o un cliente HTTP equivalente.
- Arrancar la aplicación en memoria con el servidor Fastify.

## Comando sugerido
```bash
npx vitest run tests/integration
```

## Pasos
1. Agregar pruebas de integración nuevas en `tests/integration`.
2. Usar el servidor NestJS bootstrapped desde `src/main.ts` o una versión importable de `AppModule`.
3. Verificar respuestas de estado 200 y datos esperados.

## Ejemplos
- `GET /buyer/transactions?userId=user-1`
- `POST /chat/message`
- `POST /receipt/validate`
- `POST /subscription/register`
