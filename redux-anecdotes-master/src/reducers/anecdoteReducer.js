import anecdotes_service from "../service/anecdotes_service"


export const createAnecdote = content => {
  return async dispatch => {
    const newAnec = await anecdotes_service.createNew(content)
    dispatch({
      type: 'ADD_ANEC',
      data: newAnec
    })
  }
}

export const initializeAnec = () => {
  return async dispatch => {
    const anecdotes = await anecdotes_service.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecdotes
    })
  }
}

export const handleVote = (id) => {
  return async dispatch => {
    await anecdotes_service.updateVotes(id)
    dispatch({
      type: 'VOTE',
      data: {
        id: id
      }
    })
  }
}
const anecdoteReducer = (state = [], action) => {

  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      let stateChanged = state.map(note =>
        note.id !== id ? note : changedAnec
      )
      stateChanged.sort((a, b) => b.votes - a.votes)
      return stateChanged
    case 'ADD_ANEC':
      let newState = [...state, action.data]
      newState.sort((a, b) => b.votes - a.votes)
      return newState
    
    case 'INIT_ANEC':
      return action.data

    default: return state
  }
}

export default anecdoteReducer