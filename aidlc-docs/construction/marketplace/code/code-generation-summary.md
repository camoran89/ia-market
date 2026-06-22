# Code Generation Summary

## Files Created
- `package.json`
- `tsconfig.json`
- `tsconfig.build.json`
- `src/main.ts`
- `src/app/app.module.ts`
- `src/adapters/http/auth.controller.ts`
- `src/adapters/http/auth.module.ts`
- `src/adapters/http/buyer.controller.ts`
- `src/adapters/http/buyer.module.ts`
- `src/adapters/http/chat.controller.ts`
- `src/adapters/http/chat.module.ts`
- `src/adapters/http/search.controller.ts`
- `src/adapters/http/search.module.ts`
- `src/adapters/http/receipt.controller.ts`
- `src/adapters/http/receipt.module.ts`
- `src/adapters/http/subscription.controller.ts`
- `src/adapters/http/subscription.module.ts`
- `src/adapters/http/seller.controller.ts`
- `src/adapters/http/seller.module.ts`
- `src/adapters/http/admin.controller.ts`
- `src/adapters/http/admin.module.ts`
- `src/application/application.module.ts`
- `src/application/auth.service.ts`
- `src/application/buyer.service.ts`
- `src/application/chat.service.ts`
- `src/application/search.service.ts`
- `src/application/receipt.service.ts`
- `src/application/seller.service.ts`
- `src/application/admin.service.ts`
- `src/application/subscription.service.ts`
- `src/application/order.service.ts`
- `src/domain/repositories/order.repository.ts`
- `src/domain/repositories/user.repository.ts`
- `src/infrastructure/adapters/in-memory-order.repository.ts`
- `src/infrastructure/adapters/in-memory-user.repository.ts`
- `src/adapters/http/app.controller.ts`

## Architecture
- NestJS with hexagonal structure
- `adapters/http` contains HTTP controllers and modules
- `application` contains use-case services
- `domain/repositories` contains repository abstractions
- `infrastructure/adapters` contains in-memory persistence adapters
- `app/app.module.ts` wires the NestJS application modules
- `src/main.ts` boots the NestJS app with Fastify
