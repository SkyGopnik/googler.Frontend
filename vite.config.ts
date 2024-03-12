import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { readdirSync } from "fs";

const absolutePathAliases: { [key: string]: string } = {};

const srcPath = path.resolve("./src/");
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ""));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  base: "",
  resolve: {
    alias: {
      ...absolutePathAliases
    }
  },
  root: "./src",
  plugins: [react()]
});
