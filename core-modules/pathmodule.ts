import * as path from 'path';

import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url)
console.log("file name",path.basename(filename));
console.log("Directory name:",path.dirname(filename));
console.log("Extension:",path.extname(filename));
console.log("parsed path:",path.parse(filename));
