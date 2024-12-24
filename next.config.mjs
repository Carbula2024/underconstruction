export default {
  reactStrictMode: true,
  output: 'export', // Exportación estática
  distDir: 'build', // Configura el directorio de salida
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Soluciona problemas con el módulo fs en el cliente
    }
    return config;
  },
};