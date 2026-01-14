/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // IMPORTANTE: Si tu repo se llama "mi-cv", descomenta la línea de abajo
  // basePath: '/mi-cv', 
};

export default nextConfig;