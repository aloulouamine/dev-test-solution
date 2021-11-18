/**
 * I didn't dare to change data.js file content, I only
 * changed extension because I ❤️ module import syntax,
 * and after all mix is possible with commonjs as you 
 * can see, extension is telling node how to deal with 
 * file ;).
 */
import data from './data.cjs';


/**
 * An entry function for cli. Magic happens here.
 */
function main() {
    // reading data
    console.log(data)
}

main();

