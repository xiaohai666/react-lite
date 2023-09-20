import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
// import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),

    // AutoImport({
    //   imports:[
    //     'react',
    //     'react-router-dom'
    //   ],
    //   dts:'./auto-imports.d.ts',
    // })
  ],
});
