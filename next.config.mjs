// next.config.ts
import { config } from 'dotenv';

config(); // Cargar las variables de entorno desde .env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
