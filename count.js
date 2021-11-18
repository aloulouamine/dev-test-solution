/**
 * Calculate the number of people for each town and the number
 * of animals for each person. 
 * 
 * @param {object} data 
 * @returns {object} in name calculated people and animals.
 */
export function count(data) {
    return data.map(town => ({
        name: `${town.name} [${town.people.length}]`,
        people: town.people.map(person => ({
            name: `${person.name} [${person.animals.length}]`,
            animals: person.animals
        }))
    }));
}