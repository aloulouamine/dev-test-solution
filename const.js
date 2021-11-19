// declaring possible arguments
export const COUNT_ARG_NAME = '--count'
export const COUNT_SHORT_ARG_NAME = '-c'
export const FILTER_ARG_NAME = '--filter';
export const FILTER_SHORT_ARG_NAME = '-f';
export const HELP_ARG_NAME = '--help';
export const HELP_SHORT_ARG_NAME = '-h';

// regex expression to detect key value options and make group to extract.
export const OPTIONS_NEED_VALUE_REGEX = /^(--filter|-f)=(.*)$/g;

// a string message to help cli user.s
export const HELP_MESSAGE = `You should provide at least one option, 
see https://github.com/aloulouamine/dev-test-solution#options-reference`;
