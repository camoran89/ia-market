# Unit Test Instructions

## Comando
Ejecutar tests unitarios con Vitest:

```bash
npx vitest run tests/services
```

## Cobertura esperada
- Servicios de dominio core: `AuthService`, `OrderService`, `BuyerService`, `SellerService`, `ChatService`, `ReceiptService`, `SearchService`, `SubscriptionService`.

## Pasos
1. Ejecutar `npm run build` para confirmar compilación.
2. Ejecutar `npx vitest run tests/services`.
3. Verificar que todos los tests pasen.

## Notas
- Las pruebas usan imports `.ts` desde la carpeta `src`.
- Si se agrega un servicio nuevo, crear un archivo `tests/services/<service>.spec.ts`.
