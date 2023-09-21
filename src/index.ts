import type { DependencyType } from '@changesets/types'

// This should resolve and inline the config, I presume?
export type MyDependencyType = DependencyType

// Will using the type resolve it?
export const config: MyDependencyType = 'dependencies'
