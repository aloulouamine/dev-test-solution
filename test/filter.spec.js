import { data } from '../data.cjs';
import { filter } from '../src/filter.js';

describe('Filtering by search query', () => {
    it('should return null when search match 0 result.', () => {
        // unfortunately T-Rex extincted it cannot be found in any town.
        expect(filter(data, '🦖')).toBe(null);
    });

    it('should return an non empty array when match', () => {
        expect(filter(data, 'ry').length).toBe(2);
    });

    it('should keep initial town order', () => {
        const result = filter(data, 'ry');
        // lets assume that there is no duplicate town names in the initial collection.
        const town1Name = result[0].name
        const town2Name = result[1].name

        // find initial positions
        const initialTown1Position = data.findIndex(town => town.name === town1Name);
        const initialTown2Position = data.findIndex(town => town.name === town2Name);

        expect(initialTown1Position < initialTown2Position).toBe(true)
    })

    it('should keep initial person order', () => {
        // in know in Dillauti there is many 🦆 lovers !
        const result = filter(data, 'Duck');
        // lets assume that there is no duplicate town names in the initial collection.
        const person1Name = result[0].people[0].name
        const person2Name = result[0].people[1].name

        // find initial positions (data[0] because Dillauti is the first town)
        const initialPerson1Position = data[0].people.findIndex(person => person.name === person1Name);
        const initialPerson2Position = data[0].people.findIndex(person => person.name === person2Name);

        expect(initialPerson1Position < initialPerson2Position).toBe(true)
    })

    it('should keep initial animals order', () => {
        // the first result with c we have duck 🦆 and cobra 🐍
        const result = filter(data, 'c');
        // lets assume that there is no duplicate town names in the initial collection.
        const animal1Name = result[0].people[0].animals[0].name
        const animal2Name = result[0].people[0].animals[1].name

        // find initial positions (data[0] because Dillauti is the first town)
        const initialAnimal1Position = data[0].people[0].animals.findIndex(animal => animal.name === animal1Name);
        const initialAnimal2Position = data[0].people[0].animals.findIndex(animal => animal.name === animal2Name);

        expect(initialAnimal1Position < initialAnimal2Position).toBe(true);
    })

})