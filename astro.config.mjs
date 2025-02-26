import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), react()],
  site: 'https://github.com/face2voicesync/face2voicesync.github.io/', // 确保正确的站点地址
  outDir: 'dist',    // 输出目录为 dist
  base: '/',          // 设置基路径为根目录
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});