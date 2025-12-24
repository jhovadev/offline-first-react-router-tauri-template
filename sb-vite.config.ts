import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    // Exclude reactRouter() plugin - it conflicts with Storybook
    plugins: [
        tailwindcss(),
        tsconfigPaths(),
    ],
});
