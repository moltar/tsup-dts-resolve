# tsup dts resolve repro

A repro example of `tsup` option for resolving type defs not working.

See `src/index.ts` file, which is simply exporting the types from an external package.

Build:

```sh
## uses tsup
npm build

## Still importing the types from an external package
grep "@changesets/types" lib/index.d.ts
```
