import faker from 'faker';

export const addNewUser = () => {
    const randomUserName = `@${faker.internet.userName().toLocaleLowerCase()}`
        return {
        type: 'ADD_NEW_USER',
        payload: randomUserName
    }
}

export const newMessage = (author, text, datetime) => {
    return {
        type: 'ADD_NEW_MESSAGE',
        author, text, datetime
    }
}