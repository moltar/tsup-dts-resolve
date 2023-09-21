import type { WrittenConfig } from '@changesets/types'

// This should resolve and inline the config, I presume?
export type MyWrittenConfig = WrittenConfig

// Will using the type resolve it?
export const config: MyWrittenConfig = {
  baseBranch: 'main',
}
