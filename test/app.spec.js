import { exec as _exec } from 'child_process';
import { promisify } from 'util';

// promisify child process exec 
const exec = promisify(_exec);

/**
 * In this file we will try to use app.js like an end user. (BlackBox test)
 */
describe('Dev test solution', () => {
    it('should: Empty array after filtering are NOT returned', async () => {
        const { stdout } = await exec('node app.js -f="🦖"');
        expect(stdout).toBe('');
    });

    it('should stderr when not enough params', async () => {
        await expect(exec('node app.js')).rejects.toThrowError(/You should provide/);
    });
})