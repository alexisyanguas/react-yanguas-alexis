import { faker } from '@faker-js/faker';

export const createFakeUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            id: faker.datatype.uuid(),
            name: faker.person.fullName(),
            avatar: faker.internet.avatar(),
        });
    }
    return users;
    
}   