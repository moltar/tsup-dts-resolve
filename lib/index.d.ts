// test
import { Config } from '@changesets/types';

type BaseBranch = Config['baseBranch'];
declare const foo: BaseBranch;

export { BaseBranch, foo };
