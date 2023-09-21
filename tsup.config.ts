import { defineConfig } from 'tsup'

export default defineConfig({
  "clean": true,
  "entry": [
    "src/index.ts"
  ],
  "dts": {
    "resolve": true,
  },
  "tsconfig": "tsconfig.json",
  "outDir": "lib",
})
