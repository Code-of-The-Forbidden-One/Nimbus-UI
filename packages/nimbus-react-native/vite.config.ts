import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'nimbus-react-native',
      fileName: (format) => `nimbus-react-native.${format}.js`,
    },
    rollupOptions: {
      external: ['react-native'],
      output: {
        globals: {
          'react-native': 'ReactNative',
        },
      },
    },
  },
});
