import {
    COUNT_ARG_NAME,
    COUNT_SHORT_ARG_NAME,
    FILTER_ARG_NAME
} from '../src/const.js';
import { readArgs } from '../src/read-args.js';

describe('Read arguments', () => {
    beforeEach(() => {
        // reset argv[2]
        process.argv[2] = null;
    });
    describe('Read count argument', () => {
        it('should return --count option', () => {
            // a quick and dirty way to patch arguments in the process.
            process.argv[2] = COUNT_ARG_NAME
            const { option } = readArgs();
            expect(option).toEqual(COUNT_ARG_NAME);
        });

        it('should return -c option', () => {
            process.argv[2] = COUNT_SHORT_ARG_NAME;
            const { option } = readArgs();
            expect(option).toEqual(COUNT_SHORT_ARG_NAME);
        });

        it('should return a an undefined value', () => {
            process.argv[2] = COUNT_SHORT_ARG_NAME;
            const { option, value } = readArgs();
            expect(value).toBeUndefined();
        })

    })
    describe('Read filter arguments', () => {

        it('should throw when option filter has no value', () => {
            process.argv[2] = FILTER_ARG_NAME
            expect(readArgs).toThrowError();
        });

        // a mock value passed as argument
        const MOCK_VALUE = 'TEST';
        it('should return --filter option and value', () => {
            process.argv[2] = `${FILTER_ARG_NAME}=${MOCK_VALUE}`;
            const { option, value } = readArgs();
            expect(option).toEqual(FILTER_ARG_NAME);
            expect(value).toEqual(MOCK_VALUE);
        });
    });

    it('should throw when no arguments passed', () => {
        expect(readArgs).toThrowError();
    });
});
