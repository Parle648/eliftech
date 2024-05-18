import axios from "axios";

export default async function createUser(data: any) {
    const users = await axios.post('https://eliftech-ecpp.onrender.com/user', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return users
}