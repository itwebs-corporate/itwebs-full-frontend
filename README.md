## ITWEBS

## Переменные окружения

Проект использует **два отдельных деплоя** для разных доменов:

- `itwebs.ru`
- `itwebs.by`

Домен определяется через **переменную окружения `DOMAIN`**

### Обязательные переменные

```env
DOMAIN=ru | by
BACKEND_URL=<backend url>
```

### node.js

v22.12.0

### tech stack:

Next.js, Typescript, tailwindcss, react-hook-form, zod, schadcn-ui (radix)
