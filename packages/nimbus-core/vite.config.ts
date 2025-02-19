import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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
});
