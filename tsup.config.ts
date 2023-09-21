import { defineConfig } from 'tsup'

export default defineConfig({
  "clean": true,
  "entry": [
    "src/index.ts"
  ],
  "dts": {
    "banner": "// test",
    "resolve": true,
  },
  "tsconfig": "tsconfig.json",
  "outDir": "lib",
})
