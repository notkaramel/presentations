import { resolve } from "path";
import { defineConfig } from "vite";
import { routes } from "./routes";

let inputOptions = {
  main: resolve(__dirname, "index.html"),
};

for (let e of routes) {
  inputOptions = {
    ...inputOptions,
    ...{ [e.slug]: resolve(__dirname, e.path, "index.html") },
  };
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputOptions,
    },
  },
});
