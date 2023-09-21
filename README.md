# tsup dts resolve repro

A repro example of `tsup` option for resolving type defs not working.

See `src/index.ts` file, which is simply exporting the types from an external package.

Build:

```plain
$> npm run build

> tsup-dts-resolve@1.0.0 build
> tsup

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v7.2.0
CLI Using tsup config: /.../tsup-dts-resolve/tsup.config.ts
CLI Target: es2020
CLI Cleaning output folder
CJS Build start
CJS lib/index.js 1.03 KB
CJS ⚡️ Build success in 5ms
DTS Build start
DTS ⚡️ Build success in 369ms
DTS lib/index.d.ts 126.00 B

> tsup-dts-resolve@1.0.0 postbuild
> cat lib/index.d.ts
```

```ts
// test
import { Format } from 'tsup';

type MyFormat = Format;
declare const config: MyFormat;

export { MyFormat, config };
```
