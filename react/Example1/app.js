import axios from "axios";

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';
const USER_POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts?userId=';

export default async function GetUserByIdWithPosts(id) {
    id = Number(id);
    if(id < 1) return;

    return new Promise(async function(resolve, reject) {
        const {data} = await axios(`${USER_API_URL}/${id}`);
        
        const posts = await new Promise(async function(resolve, reject) {
            const posts = await axios(`${USER_POSTS_API_URL}${id}`);
            resolve(posts.data);
        });
        data.posts = [...posts];
        resolve(data);
    });    
}

const userInfo = await GetUserByIdWithPosts(1);
console.log(userInfo);

