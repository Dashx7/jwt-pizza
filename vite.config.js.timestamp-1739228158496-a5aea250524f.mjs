// vite.config.js
import { defineConfig } from "file:///Users/joshwiseman/Desktop/VSCode/jwt-pizza/node_modules/vite/dist/node/index.js";
import istanbul from "file:///Users/joshwiseman/Desktop/VSCode/jwt-pizza/node_modules/vite-plugin-istanbul/dist/index.mjs";
var vite_config_default = defineConfig({
  build: { sourcemap: true },
  plugins: [
    istanbul({
      include: ["src/**/*"],
      exclude: ["node_modules"],
      requireEnv: false
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9zaHdpc2VtYW4vRGVza3RvcC9WU0NvZGUvand0LXBpenphXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvam9zaHdpc2VtYW4vRGVza3RvcC9WU0NvZGUvand0LXBpenphL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qb3Nod2lzZW1hbi9EZXNrdG9wL1ZTQ29kZS9qd3QtcGl6emEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBpc3RhbmJ1bCBmcm9tICd2aXRlLXBsdWdpbi1pc3RhbmJ1bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7IHNvdXJjZW1hcDogdHJ1ZSB9LFxuICBwbHVnaW5zOiBbXG4gICAgaXN0YW5idWwoe1xuICAgICAgaW5jbHVkZTogWydzcmMvKiovKiddLFxuICAgICAgZXhjbHVkZTogWydub2RlX21vZHVsZXMnXSxcbiAgICAgIHJlcXVpcmVFbnY6IGZhbHNlLFxuICAgIH0pLFxuICBdLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLGNBQWM7QUFFckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTyxFQUFFLFdBQVcsS0FBSztBQUFBLEVBQ3pCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxVQUFVO0FBQUEsTUFDcEIsU0FBUyxDQUFDLGNBQWM7QUFBQSxNQUN4QixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
