import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  })],
  output: 'static',
  site: 'https://pipoleong0305.github.io',
});
