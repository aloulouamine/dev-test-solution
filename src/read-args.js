import process from 'process';
import {
    COUNT_ARG_NAME,
    COUNT_SHORT_ARG_NAME, 
    HELP_ARG_NAME, 
    HELP_MESSAGE, 
    HELP_SHORT_ARG_NAME,
    OPTIONS_NEED_VALUE_REGEX
} from '../src/const.js';

/**
 * Reading process args, filtering and extracting values handled by this awesome
 * cli program.
 * To be honest things could be better with yargs package. I did my best :)
 * 
 * Limitations : 
 *      - regex support only `option=value` format and not `option value`
 *      - handle only first argument
 *      - throws always the base Error exception. (with different message hopefully)
 *      - ...
 * 
 * @returns {object} filtered and parsed option and its value.
 *  example: 
 *      { option: '--filter', value:'xx }
 * 
 * @throws { Error } when option is unknown
 * @throws { Error } when option is empty
 * @throws { Error } when option need value and value is empty
 * 
 */
export function readArgs() {
    // read argv at index 2 because it is the first option in args 
    // see https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processargv
    const option = process.argv[2];
    // check at least one option is passed.
    if (!option) {
        // OPTIMIZE extend custom errors from Error class 
        // (Base Error class is good enough for this test).
        throw new Error(HELP_MESSAGE);
    }
    // options need no value
    if ([
        COUNT_ARG_NAME,
        COUNT_SHORT_ARG_NAME,
        HELP_ARG_NAME,
        HELP_SHORT_ARG_NAME
    ].includes(option)) {
        return {
            option
        }
    }
    // check option need value
    // execute regex on option to extract option value group.
    const optionRegexExecResultArray = OPTIONS_NEED_VALUE_REGEX.exec(option);
    if (optionRegexExecResultArray !== null) {
        // skip full match and take first and second match as option and value
        const [, _option, value] = optionRegexExecResultArray;
        // we strictly need value for this options.
        if (!value) {
            throw new Error(`You should give non empty ${_option} value.`);
        }
        return {
            option: _option,
            value
        }
    }
    throw new Error(`Argument ${option} is unknown.`)
}