// test
type Format = 'cjs' | 'esm' | 'iife';

type MyFormat = Format;
declare const config: MyFormat;

export { MyFormat, config };
