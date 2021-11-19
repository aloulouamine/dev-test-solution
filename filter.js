/**
 * A non case sensitive search function that returns in initial order 
 * an array search result of towns, people and animals filtered by a search 
 * query string.
 *
 * @param {object} data a collection of town, people and animals.
 * @param {string} query animal name to search for.
 * 
 * @returns {object | null } filtered data from query or null when no result found.
 */
export function filter(data, query) {
    const result = data.reduce(
        (towns, town) => {
            // keep a reference of filtered people to erase in town result.
            const filteredPeopleAndAnimals = town.people.reduce(
                (people, person) => {
                    // keep a reference of filtered animal to erase in people result.
                    const filteredAnimals = person.animals.filter(
                        animal => animal.name.toUpperCase().includes(query.toUpperCase())
                    );
                    if (filteredAnimals.length > 0) {
                        return [
                            ...people,
                            // erase filtered animals
                            {
                                ...person,
                                animals: filteredAnimals
                            }
                        ]
                    }
                    return people;
                }
                , [])

            if (filteredPeopleAndAnimals.length > 0) {
                return [
                    ...towns,
                    {
                        ...town,
                        // erase filtered people
                        people: filteredPeopleAndAnimals
                    }
                ]
            }
            return towns;
        }, []
    );
    return result.length > 0 ? result : null;
}