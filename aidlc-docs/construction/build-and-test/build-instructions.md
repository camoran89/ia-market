# Build Instructions

## Prerrequisitos
- Node.js 20+ instalado
- Dependencias instaladas con `npm install`

## Comandos principales
- Compilar TypeScript: `npm run build`
- Iniciar la aplicación compilada: `npm start`
- Ejecutar en modo desarrollo: `npm run dev`

## Verificación de compilación
1. Ejecuta `npm run build`.
2. Confirma que no hay errores de TypeScript.
3. Asegúrate de que `dist/main.js` se genere.

## Observaciones
- El proyecto utiliza `tsconfig.build.json` para la compilación de producción.
- El modo de desarrollo usa `ts-node-dev` para recarga automática.
