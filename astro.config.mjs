import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.GITHUB_ACTIONS === 'true' ? '/rgaa-studio-site' : '';

export default defineConfig({
  site: 'https://numera11y.github.io',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
