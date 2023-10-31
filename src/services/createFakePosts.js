import { faker } from '@faker-js/faker';

export const createFakePosts = (count, users) => {
    const posts = [];
    for (let i = 0; i < count; i++) {
        posts.push({
            id: faker.datatype.uuid(),
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraphs(),
            image: faker.image.url(),
            userId: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    return posts;
}   