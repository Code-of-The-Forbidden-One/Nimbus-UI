import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'nimbus-preact',
      fileName: (format) => `nimbus-preact.${format}.js`,
    },
    rollupOptions: {
      external: ['preact', 'preact/compat'],
      output: {
        globals: {
          preact: 'Preact',
          'preact/compat': 'PreactCompat',
        },
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
