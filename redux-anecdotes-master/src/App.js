import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/anecdoteList'
import CreateForm from './components/createForm'
import Filter from './components/filter'
import Notification from './components/Notification'
import { initializeAnec } from './reducers/anecdoteReducer'

const App = (props) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnec())
  // eslint-disable-next-line
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification store={props.store}/>
      <CreateForm store={props.store}/>
      <Filter store={props.store}/>
      <AnecdoteList store={props.store}/>
      
    </div>
  )
}

export default App