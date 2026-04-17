// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Deployment target: GitHub Pages with custom domain tokenwright.ai.
// If DNS hasn't propagated yet, the site is also reachable at the project-pages
// URL (connor113.github.io/tokenwright-site/); the custom domain takes over
// once the Pages cert provisions and DNS resolves.
export default defineConfig({
  site: 'https://tokenwright.ai',
  trailingSlash: 'ignore',
});
