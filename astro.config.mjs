import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), react()],
  outDir: 'dist',    // 确保输出目录为 dist
  output: 'static',   // 生成静态站点
  base: '/',          // 设置基路径为根目录
  build: {
    format: 'directory' // 确保生成 dist/index.html
  },
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});