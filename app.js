/**
 * I didn't dare to change data.js file content, I only
 * changed extension because I ❤️ module import syntax,
 * and after all mix is possible with commonjs as you 
 * can see, file extension is telling node how to deal 
 * with the file ;).
 */
import { data } from './data.cjs';
import {
	COUNT_ARG_NAME,
	COUNT_SHORT_ARG_NAME,
	FILTER_ARG_NAME,
	FILTER_SHORT_ARG_NAME,
	HELP_MESSAGE
} from './const.js';
import { count } from './count.js';
import { filter } from './filter.js';
import { readArgs } from './read-args.js';



/**
 * An entry function for cli. Magic happens here.
 */
function main() {
	try {
		// reading arguments
		const { option, value } = readArgs();
		let result;
		if ([COUNT_ARG_NAME, COUNT_SHORT_ARG_NAME].includes(option)) {
			// count option
			result = count(data);
		} else if ([FILTER_ARG_NAME, FILTER_SHORT_ARG_NAME].includes(option)) {
			// filter option
			result = filter(data, value);
		} else {
			// display help 
			console.log(HELP_MESSAGE);
			return;
		}
		// pretty print output
		console.log(JSON.stringify(result, null, 2))
		// exit process with success.
		process.exit(0);
	} catch (error) {
		// log error to console and send a non zero exit
		const { message } = error;
		console.error(message ? message : error);
		process.exit(1);
	}
}

// invoke entry point.
main();
