import { defineConfig, UserConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'nimbus-core',
      fileName: (format) => `nimbus-core.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    css: true,
  },
} as UserConfig);
