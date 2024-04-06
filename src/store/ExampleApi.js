import axios from "axios"

const baseUrl = 'someUrl'

export const likePost = async (tweetId) => {
    try {
        const response = (await axios.post(baseUrl, { tweetId })).data
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export const retweetPost = async (tweetId) => {
    try {
        const response = (await axios.post(baseUrl, { tweetId })).data
        return response
    }
    catch (error) {
        console.log(error)
    }
}
