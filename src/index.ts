import type { Format } from 'tsup'

// This should resolve and inline the config, I presume?
export type MyFormat = Format

// Will using the type resolve it?
export const config: MyFormat = 'esm'
