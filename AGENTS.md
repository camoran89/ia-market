# AGENTS.md

## Regla obligatoria de contexto

Antes de realizar cualquier análisis, modificación, generación de código, documentación, pruebas, refactorización o cualquier otra tarea dentro de este proyecto, el agente debe leer obligatoriamente todos los archivos Markdown ubicados en las siguientes carpetas:

- `context/`
- `aidlc-docs/`

Esta lectura debe hacerse siempre, sin excepción, antes de ejecutar cualquier acción.

## Orden de lectura recomendado

1. Leer todos los archivos `.md` dentro de `context/`
2. Leer todos los archivos `.md` dentro de `aidlc-docs/`
3. Usar la información encontrada como contexto principal para cualquier decisión técnica, funcional o de arquitectura.

## Archivos de contexto principales

El agente debe considerar especialmente los siguientes archivos cuando existan:

```text
context/flowchart.md
context/requisitos-angular-22.md
context/requisitos-producto.md
context/requisitos-typescript.md