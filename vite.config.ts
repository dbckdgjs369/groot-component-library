//

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist", // dist 폴더로 타입 선언을 출력
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "grootComponentLibrary",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // react와 react-dom은 외부 의존성으로 설정
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "lib/[name].[ext]",
      },
    },
  },
});
