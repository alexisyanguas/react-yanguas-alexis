export const transformPost = ({
    id,
    firstName,
    lastName,
    image,
}) => ({
    id,
    title: `${firstName} ${lastName}`,
    body: `${firstName} ${lastName}`,
    image,
    user: {
        id,
        name: `${firstName} ${lastName}`,
        avatar: image,
    }
});


