import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    envDir: '../../',
    server: {
      port: Number(process.env.CLIENT_PORT) || 3001,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
        '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '@infrastructure': fileURLToPath(
          new URL('./src/infrastructure', import.meta.url),
        ),
      },
    },
    define: {
      __SERVER_PORT__: process.env.SERVER_PORT,
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          app: './index.html',
        },
        output: {
          entryFileNames: `assets/${!isDev ? '[name].[hash]' : '[name]'}.js`,
          chunkFileNames: `assets/[name]${!isDev ? '.[hash]' : ''}.js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    plugins: [
      checker({ typescript: true }),
      react(),
      eslint({ lintOnStart: true, overrideConfigFile: '../../.eslintrc.js' }),
      stylelint({ fix: true }),
    ],
  };
});
