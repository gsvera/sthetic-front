# Etapa 1: Build
FROM node:20-alpine AS builder

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json / yarn.lock primero
# Esto ayuda a que Docker cachee la instalación de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Construimos la aplicación Next.js
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine AS runner

WORKDIR /app

# Copiamos solo lo necesario desde la etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Puerto que expondrá la app
EXPOSE 3000

# Comando para correr la app en producción
CMD ["npm", "start"]