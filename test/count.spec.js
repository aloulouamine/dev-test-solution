import { count } from '../src/count.js';
import { data } from '../data.cjs';
describe('Count people and animals', () => {

    let result;

    beforeEach(() => {
        result = count(data)
    })
    it('should display count people', () => {
        expect(result[0].name).toEqual(`${data[0].name} [${result[0].people.length}]`);
    });

    it('should display animals count', () => {
        const people = result[0].people[0];
        expect(people.name).toEqual(`${data[0].people[0].name} [${people.animals.length}]`);
    })
})