/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  assetPrefix: '',
  images: {
    unoptimized: true,  // Necesario para exportar imágenes de Next.js
  },
}

export default nextConfig;