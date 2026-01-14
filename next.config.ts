/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/mi-cv', // Esto es lo que permite que el dominio funcione sin errores
};

export default nextConfig;
