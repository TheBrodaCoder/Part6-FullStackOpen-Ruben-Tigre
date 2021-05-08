import React from 'react'
import { connect } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'
import { handleNoti } from '../reducers/notificationReducer'
import Anecdote from './anecdote'

const AnecdoteList = (props) => {

    const vote = (id) => {
        let targetAnec = props.anecdotes.find(anec => anec.id === id)
        let content = targetAnec.content
        props.handleNoti(`You voted: ${content}`, 5000)

        props.handleVote(id)
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} content={anecdote.content} votes={anecdote.votes} vote={() => vote(anecdote.id)}/>
            )}
        </div>
    )
}

const MapStateToProps = state => {
    if ( state.filter === '' ) {
        return {
            anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes)
        }
    } else {
        return {
            anecdotes: state.anecdotes.filter(note=> note.content.includes(state.filter)).sort((a, b) => b.votes - a.votes)
        }
    }
}

const MapDispatchToProps = {
    handleVote,
    handleNoti
}

const ConnectedAnecList = connect(
    MapStateToProps,
    MapDispatchToProps
    )(AnecdoteList)
export default ConnectedAnecList
