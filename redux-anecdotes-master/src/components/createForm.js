import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { handleNoti } from '../reducers/notificationReducer'

const CreateForm = (props) => {

    const addAnecdote = (evt) => {
        evt.preventDefault()
        //Set the noti message
        props.handleNoti(`you created: ${evt.target.anecdote.value}`, 500)
        //Concat the new anecdote to the store
        props.createAnecdote(evt.target.anecdote.value)
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <input name='anecdote'/>
            <button>create</button>
        </form>
        </>
    )
}
const MapStateToProps = state => {
    return state
}

const MapDispatchToProps = {
    createAnecdote,
    handleNoti
}

const ConnectedCreateForm = connect(
    MapStateToProps,
    MapDispatchToProps
    )(CreateForm)
export default ConnectedCreateForm
