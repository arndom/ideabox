import axios  from "axios";

const redditInstance = axios.create({
    baseURL: 'https://www.reddit.com/r/AppIdeas'
})

const devInstance = axios.create({
    baseURL: 'https://dev.to/api'
})
const redditInstanceI = axios.create({
    baseURL: `https://www.reddit.com/r/Startup_Ideas/`
})

export {redditInstance, devInstance, redditInstanceI};