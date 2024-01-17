import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { SITE_URL } from './src/data/config';
import remarkImageLink from './src/plugins/remark-plugins/remark-image-links';
import { contentDirectory } from './src/data/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: SITE_URL,
  markdown: {
    syntaxHighlight: 'prism',
    /**
     * Refer to: https://docs.astro.build/en/guides/markdown-content/#markdown-plugins
     * Applied to .md and .mdx files
     */
    remarkPlugins: [[remarkImageLink, { contentDirectory }]],
    rehypePlugins: [],
  },
});
