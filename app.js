/**
 * I didn't dare to change data.js file content, I only
 * changed extension because I ❤️ module import syntax,
 * and after all mix is possible with commonjs as you 
 * can see, extension is telling node how to deal with 
 * file ;).
 */
import {data} from './data.cjs';

import { COUNT_ARG_NAME, COUNT_SHORT_ARG_NAME } from './const.js';
import { count } from './count.js';
import { readArgs } from './read-args.js';


/**
 * An entry function for cli. Magic happens here.
 */
async function main() {
    // reading arguments
    const { option, value } = readArgs();
    if ([COUNT_ARG_NAME, COUNT_SHORT_ARG_NAME].includes(option)) {
        return count(data);
    }

}

main();

