import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createNew = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseURL, object)
    return response.data
}

const updateVotes = async (id) => {
    const target = await axios.get(`${baseURL}/${id}`)
    const update = await axios.put(`${baseURL}/${id}`, {...target.data, votes: target.data.votes + 1} )
    return update.data
}

// eslint-disable-next-line
export default {
    getAll, createNew, updateVotes
}