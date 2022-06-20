import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8081, // 设置服务启动端口号
    // open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      "/api": {
        target: "http://ldjun.cn:90",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
