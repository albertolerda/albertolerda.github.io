import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
      shikiConfig: {
        theme: "monokai",
      },
    },
    site: 'https://albertolerda.github.io',
});
