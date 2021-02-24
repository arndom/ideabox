import axios  from "axios";

const redditInstance = axios.create({
    baseURL: 'https://www.reddit.com/r/AppIdeas'
})

const devInstance = axios.create({
    baseURL: 'https://dev.to/api'
})
const hashInstance = axios.create({
    baseURL: `https://api.hashnode.com`
})

export {redditInstance, devInstance, hashInstance};