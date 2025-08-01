import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vitejs.dev/config/
// Set the base path for GitHub Pages deployment
// Replace 'ohmyfork' with your repo name if different
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [],
      development: mode === "development"
    }),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));
