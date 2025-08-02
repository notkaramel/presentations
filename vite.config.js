import { resolve } from "path";
import { defineConfig } from "vite";

/**
 * Routes for build options
 * @type {String[]}
 */
export const routes = [
  "del-bleue",
  "method-ingenierie",
  "pecha-kucha",
];


let inputOptions = {
  main: resolve(__dirname, "index.html"),
};

for (let path of routes) {
  inputOptions = {
    ...inputOptions,
    ...{ [path]: resolve(__dirname, path, "index.html") },
  };
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputOptions,
    },
  },
});
