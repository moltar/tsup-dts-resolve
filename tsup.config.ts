import { defineConfig } from 'tsup'

export default defineConfig({
  "clean": true,
  "entry": [
    "src/index.ts"
  ],
  "dts": {
    "banner": "// test",
    "resolve": false,
  },

  // Always bundle modules matching given patterns
  // Also does not help
  "noExternal": ["tsup"],

  "tsconfig": "tsconfig.json",
  "outDir": "lib",
})
