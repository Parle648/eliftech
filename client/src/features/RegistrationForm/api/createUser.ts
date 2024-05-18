import axios from "axios";

export default async function createUser(data: any) {
    const users = await axios.post('http://localhost:3001/user', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return users
}